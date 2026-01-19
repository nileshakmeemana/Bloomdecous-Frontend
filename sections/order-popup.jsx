import { useRef, useState, useEffect } from "react";
import Message from "./message";

export default function Popup({ onClose, packageId, addons }) {
    const [showMessage, setShowMessage] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const hideTimer = useRef(null);

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        phone: "",
        address: "",
        message: "",
        datetime: "",
    });

    const [company, setCompany] = useState({
        name: "",
        address: "",
        email: "",
        tel1: "N/A",
        tel2: "N/A",
        tel3: "N/A",
    });

    const [loading, setLoading] = useState(false);

    /* =========================
       FETCH COMPANY DETAILS
    ========================= */
    const fetchCompanyDetails = async () => {
        try {
            const res = await fetch(
                "http://localhost/Bloomdecous-Backend/API/Public/getCompanyDetails.php"
            );
            const data = await res.json();
            if (data) {
                setCompany({
                    name: data.Company_Name || "",
                    address: data.Company_Address || "",
                    email: data.Company_Email || "",
                    tel1: data.Company_Tel1?.trim() || "N/A",
                    tel2: data.Company_Tel2?.trim() || "N/A",
                    tel3: data.Company_Tel3?.trim() || "N/A",
                });
            }
        } catch (error) {
            console.error("Error fetching company details:", error);
        }
    };

    useEffect(() => {
        fetchCompanyDetails();
    }, []);

    /* =========================
       FETCH CUSTOMER BY EMAIL
    ========================= */
    const fetchCustomerByEmail = async () => {
        if (!formData.email) return;

        try {
            const res = await fetch(
                "http://localhost/Bloomdecous-Backend/API/Public/getCustomerDetails.php",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams({ Customer_Email: formData.email }),
                }
            );

            const data = await res.json();

            if (data.success && data.data) {
                setFormData((prev) => ({
                    ...prev,
                    name: data.data.Customer_Name || "",
                    phone: data.data.Customer_Contact || "",
                    address: data.data.Customer_Address || "",
                }));
            } else {
                setFormData((prev) => ({
                    ...prev,
                    name: "",
                    phone: "",
                    address: "",
                }));
            }
        } catch (error) {
            console.error("Error fetching customer details:", error);
        }
    };

    /* =========================
       HANDLE FORM SUBMISSION
    ========================= */
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const selectedAddons = addons
                .filter((addon) => addon.checked)
                .map((addon) => ({
                    Addon_Id: addon.Id,
                    Addon_Name: addon.Addon_Name,
                    Addon_Price: addon.Addon_Price,
                }));

            const postData = new URLSearchParams({
                Package_Id: packageId,
                Customer_Email: formData.email,
                Customer_Name: formData.name,
                Customer_Contact: formData.phone,
                Customer_Address: formData.address,
                Event_Location: formData.message,
                Event_DateTime: formData.datetime,
                addons: JSON.stringify(selectedAddons),
            });

            const res = await fetch(
                "http://localhost/Bloomdecous-Backend/API/Public/saveOrder.php",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: postData.toString(),
                }
            );

            const result = await res.json();

            if (result.success) {
                console.log("Order saved:", result);

                const confirmationPdfUrl = `http://localhost/Bloomdecous-Backend/API/Public/generateOrderConfirmation.php?order_id=${result.Order_Id}&customerName=${encodeURIComponent(
                    result.Customer_Name
                )}&packageName=${encodeURIComponent(
                    result.Package_Name
                )}&eventLocation=${encodeURIComponent(
                    result.Event_Location
                )}&eventDateTime=${encodeURIComponent(
                    result.Event_DateTime
                )}&packagePrice=${encodeURIComponent(
                    result.Package_Price
                )}&addons=${encodeURIComponent(JSON.stringify(
                    selectedAddons.map(a => ({
                        Addon_Name: a.Addon_Name,
                        Addon_Price: a.Addon_Price
                    }))
                )
                )}`;

                await sendOrderConfirmationEmail(
                    result.Order_Id,
                    result.Customer_Name,
                    result.Customer_Email,
                    result.Package_Name,
                    result.Event_Location,
                    result.Event_DateTime,
                    result.Package_Price,
                    selectedAddons,
                    confirmationPdfUrl
                );

                if (hideTimer.current) clearTimeout(hideTimer.current);
                
                // Start fade out animation
                setIsClosing(true);
                
                // After fade out completes, show toast
                setTimeout(() => {
                    setShowMessage(true);
                    
                    // Close popup after toast duration (5 seconds)
                    hideTimer.current = setTimeout(() => {
                        onClose();
                    }, 5000);
                }, 300); // Match fade out animation duration
            } else {
                alert(result.message || "Order submission failed!");
            }
        } catch (error) {
            console.error("Error saving order:", error);
            alert("Server error while submitting order!");
        } finally {
            setLoading(false);
        }
    };

    /* =========================
       SEND CONFIRMATION EMAIL
    ========================= */
    const sendOrderConfirmationEmail = async (
        orderId,
        customerName,
        customerEmail,
        packageName,
        eventLocation,
        eventDateTime,
        packagePrice,
        addons,
        confirmationPdfUrl
    ) => {
        if (!customerEmail) return;

        const emailSubject = `Order Confirmation - ${orderId}`;
        let addonHtml = "";

        if (addons && addons.length > 0) {
            addonHtml += `<table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;margin-top:20px;">
        <tr style="background:#f2f2f2;"><td colspan="2" style="font-weight:bold;">Addon Details</td></tr>`;
            addons.forEach((addon) => {
                addonHtml += `<tr><td>${addon.Addon_Name} ($${addon.Addon_Price})</td></tr>`;
            });
            addonHtml += "</table>";
        }

        const formattedPackagePrice = "$" + parseFloat(packagePrice).toFixed(2);

        const emailBody = `
    <div style="font-family: Arial, sans-serif; background-color:#f6f6f6; padding:30px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background-color:#ffffff; border-radius:8px; overflow:hidden;">
            
            <!-- HEADER -->
            <tr>
            <td style="background:#b19316;padding:20px;text-align:center;color:#ffffff;">
                <h2 style="margin:0;">Order Submission Confirmed</h2>
            </td>
            </tr>

            <!-- LOGO -->
            <tr>
            <td style="padding-top:20px;text-align:center;">
                <img src="https://uat.orbislk.com/Bloomdecouse/Web/Views/assets/img/logo.png" alt="Logo">
            </td>
            </tr>

            <!-- BODY -->
            <tr>
            <td style="padding:30px;">
                <p style="font-size:15px;color:#333;">Dear <b>${customerName}</b>,</p>

                <p style="font-size:14px;color:#555;">
                Thank you for choosing <b>${company.name}</b>.  
                Your booking has been <b>successfully submitted</b>.
                </p>

                <!-- ORDER DETAILS -->
                <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;margin-top:20px;">
                <tr style="background:#f2f2f2;">
                    <td colspan="2" style="font-weight:bold;">Order Details</td>
                </tr>
                <tr><td><b>Order ID</b></td><td>${orderId}</td></tr>
                <tr><td><b>Package</b></td><td>${packageName} (${formattedPackagePrice})</td></tr>
                <tr><td><b>Event Location</b></td><td>${eventLocation}</td></tr>
                <tr><td><b>Event Date & Time</b></td><td>${eventDateTime}</td></tr>
                </table>

                <!-- ADDON DETAILS -->
                ${addonHtml}

                <p style="margin-top:20px;font-size:14px;color:#be3235; font-weight:bold;">
                Delivery fee will be added at the end depending on the location.<br>(delivery setup and breakdown + tax)
                </p>

                <p style="margin-top:20px;font-size:14px;color:#555;">
                Our team member will contact you shortly to discuss further details.
                </p>

                <p style="font-size:14px;color:#555;">
                If you have any questions, feel free to contact us.
                </p>

                <!-- DOWNLOAD BUTTON -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:25px;">
                <tr>
                    <td align="center">
                    <a href="${confirmationPdfUrl}" target="_blank"
                        style="display:inline-block;padding:12px 25px;background:#b19316;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;border-radius:5px;">
                        Download Submission (PDF)
                    </a>
                    </td>
                </tr>
                </table>
            </td>
            </tr>

            <!-- FOOTER -->
            <tr>
            <td style="background:#f9f9f9;padding:20px;text-align:center;font-size:12px;color:#777;">
                <b>${company.name}</b><br>
                ${company.address}<br>
                Email: ${company.email}<br>
                Contact: ${company.tel1}
            </td>
            </tr>

        </table>
    </div>
    `;


        await fetch("http://localhost/Bloomdecous-Backend/sendEmail.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                from: company.email || "company@example.com",
                name: company.name || "Bloomdecous",
                to: customerEmail,
                subject: emailSubject,
                body: emailBody,
            }).toString(),
        });
    };

    const handleToastClose = () => {
        setShowMessage(false);
        if (hideTimer.current) clearTimeout(hideTimer.current);
        onClose();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
        <div className={`md:grid md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-xl transition-opacity duration-300 ${isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-fadeIn'}`}>
            <img
                src="/assets/roses.jpg"
                alt="roses"
                className="hidden md:block w-full max-w-md rounded-l-xl h-full object-cover"
            />
            <div className="relative flex items-center justify-center">
                <button
                    className="absolute top-3 right-3 bg-gray-200 rounded-full p-2 cursor-pointer"
                    aria-label="Close"
                    onClick={() => {
                        setIsClosing(true);
                        setTimeout(() => onClose(), 300);
                    }}
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13 2 2 13M2 2l11 11"
                            stroke="#1F2937"
                            strokeOpacity=".7"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <div className="max-md:py-8 py-6 px-6 md:px-8 w-full">
                    <p className="text-x font-medium text-[#b19316] text-center md:text-left">
                        Request a quote
                    </p>
                    <h1 className="text-2xl font-semibold text-slate-800 text-center md:text-left mt-1">
                        Tell us about your event
                    </h1>
                    <p className="mt-2 text-sm text-gray-500 text-center md:text-left">
                        Share your details and we'll get back to you.
                    </p>

                    <form className="mt-4 space-y-2" onSubmit={handleSubmit}>
                        {/* Hidden Package Id */}
                        <input type="hidden" name="packageId" value={packageId} />

                        {/* Email */}
                        <div className="flex flex-col text-xs">
                            <label className="text-black/70 mb-1" htmlFor="quote-email">
                                Your Email
                            </label>
                            <input
                                id="quote-email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                onBlur={fetchCustomerByEmail}
                                className="h-8 px-2 text-sm w-full border border-gray-300 rounded outline-none focus:border-[#b19316]"
                                required
                            />
                        </div>

                        {/* Name */}
                        <div className="flex flex-col text-xs">
                            <label className="text-black/70 mb-1" htmlFor="quote-name">
                                Your Name
                            </label>
                            <input
                                id="quote-name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="h-8 px-2 text-sm w-full border border-gray-300 rounded outline-none focus:border-[#b19316]"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col text-xs">
                            <label className="text-black/70 mb-1" htmlFor="quote-phone">
                                Phone Number
                            </label>
                            <input
                                id="quote-phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="(+1) 555-123-4567"
                                className="h-8 px-2 text-sm w-full border border-gray-300 rounded outline-none focus:border-[#b19316]"
                                required
                            />
                        </div>

                        {/* Address */}
                        <div className="flex flex-col text-xs">
                            <label className="text-black/70 mb-1" htmlFor="quote-address">
                                Address
                            </label>
                            <input
                                id="quote-address"
                                name="address"
                                type="text"
                                value={formData.address.replace(/<[^>]*>/g, "")}
                                onChange={handleInputChange}
                                placeholder="123 Main St, City, State, ZIP"
                                className="h-8 px-2 text-sm w-full border border-gray-300 rounded outline-none focus:border-[#b19316]"
                                required
                            />
                        </div>

                        {/* Event Location */}
                        <div className="flex flex-col text-xs">
                            <label className="text-black/70 mb-1" htmlFor="quote-message">
                                Event Location
                            </label>
                            <textarea
                                id="quote-message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full p-2 text-sm h-8 border border-gray-300 rounded resize-none outline-none focus:border-[#b19316] overflow-hidden"
                                required
                            />
                        </div>

                        {/* Date & Time */}
                        <div className="flex flex-col text-xs">
                            <label className="text-black/70 mb-1" htmlFor="quote-datetime">
                                Date and Time
                            </label>
                            <input
                                id="quote-datetime"
                                name="datetime"
                                type="datetime-local"
                                value={formData.datetime}
                                onChange={handleInputChange}
                                className="h-8 px-2 text-sm w-full border border-gray-300 rounded outline-none focus:border-[#b19316]"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full md:w-auto cursor-pointer rounded-full bg-[#b19316] text-sm px-8 py-2 text-white font-medium hover:opacity-90 active:scale-95 transition mt-3"
                        >
                            {loading ? "Submitting..." : "Send request"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
        {/* Toast message - rendered outside popup */}
        {showMessage && (
            <Message 
                onClose={handleToastClose} 
                status="success"
                title="Order placed successfully!"
                description="Your order has been submitted. We'll contact you shortly."
            />
        )}
        </>
    );
}
