"use client";

import { useState, useEffect } from "react";
import Message from "./message";

export default function Booking() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const [company, setCompany] = useState({
    Company_Name: "",
    Company_Email: "",
    Company_Address: "",
    Company_Tel1: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  const [messageStatus, setMessageStatus] = useState("success");

  /* =========================
     FETCH COMPANY DETAILS
  ========================= */
  useEffect(() => {
    fetch("https://uat.orbislk.com/Bloomdecous-Backend/API/Public/getCompanyDetails.php")
      .then((res) => res.json())
      .then((data) => {
        setCompany({
          Company_Name: data.Company_Name || "",
          Company_Email: data.Company_Email || "",
          Company_Address: data.Company_Address || "",
          Company_Tel1: data.Company_Tel1 || "",
        });
      })
      .catch(console.error);
  }, []);

  /* =========================
     HANDLE INPUT CHANGE
  ========================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* =========================
     FETCH CUSTOMER BY EMAIL
  ========================= */
  const fetchCustomerByEmail = async () => {
    if (!formData.email) return;

    try {
      const res = await fetch(
        "https://uat.orbislk.com/Bloomdecous-Backend/API/Public/getCustomerDetails.php",
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
     SUBMIT FORM
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://uat.orbislk.com/Bloomdecous-Backend/API/Public/saveDetails.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            Customer_Email: formData.email,
            Customer_Name: formData.name,
            Customer_Contact: formData.phone,
            Customer_Address: formData.address,
            Subject: formData.subject,
            Message: formData.message,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setMessageStatus("success");
        setShowMessage(true);
        sendConfirmationEmail();
        sendSubmitEmail();
        // Reset form after successful submission
        setFormData({
          email: "",
          name: "",
          phone: "",
          address: "",
          subject: "",
          message: "",
        });
        // Auto-hide message after 5 seconds
        setTimeout(() => setShowMessage(false), 5000);
      } else {
        setMessageStatus("error");
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 5000);
        console.error(data.alert || "Failed to save data");
      }
    } catch (error) {
      setMessageStatus("error");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
      console.error("Server error:", error);
    }
  };

  /* =========================
     EMAIL FUNCTIONS (UNCHANGED HTML)
  ========================= */
  const sendConfirmationEmail = () => {
    const emailBody = `
    <div style="font-family: Arial, sans-serif; background-color:#f6f6f6; padding:30px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background-color:#ffffff; border-radius:8px; overflow:hidden;">

        <!-- HEADER -->
        <tr>
          <td style="background:#b19316;padding:20px;text-align:center;color:#ffffff;">
            <h2 style="margin:0;">Confirmation</h2>
          </td>
        </tr>

        <!-- LOGO -->
        <tr>
          <td style="padding-top:20px;text-align:center;">
            <img src="https://uat.orbislk.com/Bloomdecous-Backend/Web/Views/assets/img/logo.png" alt="Logo">
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="padding:30px;">
            <p style="font-size:15px;color:#333;">
              Dear <b>${formData.name}</b>,
            </p>

            <p style="font-size:14px;color:#555;">
              Thank you for choosing <b>${company.Company_Name}</b>.  
              Your inquiry has been <b>successfully submited</b>. Our team member will contact you shortly to discuss further details.
            </p>

            <p style="font-size:15px;color:#333;">Thanks & Regards <br><b>${company.Company_Name}</b>,</p>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#f9f9f9;padding:20px;text-align:center;font-size:12px;color:#777;">
            <b>${company.Company_Name}</b><br>
            ${company.Company_Address}<br>
            Email: ${company.Company_Email}<br>
            Contact: ${company.Company_Tel1}
          </td>
        </tr>

      </table>
    </div>`;

    sendEmail(company.Company_Email, company.Company_Name, formData.email, "Inquiry Submission", emailBody);
  };

  const sendSubmitEmail = () => {
    const emailBody = `
    <div style="font-family: Arial, sans-serif; background-color:#f6f6f6; padding:30px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background-color:#ffffff; border-radius:8px; overflow:hidden;">

        <!-- HEADER -->
        <tr>
          <td style="background:#b19316;padding:20px;text-align:center;color:#ffffff;">
            <h2 style="margin:0;">Inquiry</h2>
          </td>
        </tr>

        <!-- LOGO -->
        <tr>
          <td style="padding-top:20px;text-align:center;">
            <img src="https://uat.orbislk.com/Bloomdecous-Backend/Web/Views/assets/img/logo.png" alt="Logo">
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="padding:30px;">
            <p style="font-size:15px;color:#333;">
              New inquiry from <b>${formData.name}</b>,
            </p>

            <p style="font-size:14px;color:#555;">
              ${formData.message}  
            </p>
            <p style="font-size:15px;color:#333;">Thanks & Regards 
              <br><b>${formData.name}</b>,
              <br><b>${formData.address}</b>,
              <br><b>${formData.email}</b>,
              <br><b>${formData.phone}</b>
            </p>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#f9f9f9;padding:20px;text-align:center;font-size:12px;color:#777;">
            <b>${company.Company_Name}</b><br>
            ${company.Company_Address}<br>
            Email: ${company.Company_Email}<br>
            Contact: ${company.Company_Tel1}
          </td>
        </tr>

      </table>
    </div>`;

    receiverEmail(formData.email, formData.name, company.Company_Email, `New Inquiry | ${formData.subject}`, emailBody);
  };

  const sendEmail = async (from, name, to, subject, body) => {
    await fetch("https://uat.orbislk.com/Bloomdecous-Backend/sendEmail.php", {
      method: "POST",
      body: new URLSearchParams({ from, name, to, subject, body }),
    });
  };

  const receiverEmail = async (from, name, to, subject, body) => {
    await fetch("https://uat.orbislk.com/Bloomdecous-Backend/sendEmail.php", {
      method: "POST",
      body: new URLSearchParams({ from, name, to, subject, body }),
    });
  };

  /* =========================
     RENDER FORM (UI UNCHANGED)
  ========================= */
  return (
    <>
    <section className="py-20 flex flex-col items-center justify-center" id="contact-us">
      <form onSubmit={handleSubmit} className="flex flex-col items-center text-sm text-slate-800">
        <p className="text-xs bg-[#b19316] text-white font-medium px-3 py-1 rounded-full">
          Check Booking
        </p>

        <h1 className="text-4xl font-bold py-4 text-center">
          Let’s Get In Touch.
        </h1>

        <p className="max-md:text-sm text-gray-500 pb-10 text-center">
          Or just reach out manually to us at{" "}
          <a href="/" className="text-[#b19316] hover:underline">        
            bloomdecous@gmail.com
          </a>
        </p>

        <div className="max-w-96 w-full px-4">
          {/* EMAIL */}
          <label className="font-medium mt-4">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={fetchCustomerByEmail}
            placeholder="Enter your email address"
            className="h-10 w-full mt-2 mb-4 px-4 border border-slate-300 rounded-full outline-none focus:ring-1 focus:ring-[#b19316]"
            required
          />

          {/* NAME */}
          <label className="font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="h-10 w-full mt-2 mb-4 px-4 border border-slate-300 rounded-full outline-none focus:ring-1 focus:ring-[#b19316]"
            required
          />

          {/* PHONE */}
          <label className="font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="h-10 w-full mt-2 mb-4 px-4 border border-slate-300 rounded-full outline-none focus:ring-1 focus:ring-[#b19316]"
            required
          />

          {/* ADDRESS */}
          <label className="font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address.replace(/<[^>]*>/g, "")}
            onChange={handleChange}
            placeholder="Enter your address"
            className="h-10 w-full mt-2 mb-4 px-4 border border-slate-300 rounded-full outline-none focus:ring-1 focus:ring-[#b19316]"
            required
          />

          {/* SUBJECT */}
          <label className="font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter your subject"
            className="h-10 w-full mt-2 mb-4 px-4 border border-slate-300 rounded-full outline-none focus:ring-1 focus:ring-[#b19316]"
            required
          />

          {/* MESSAGE */}
          <label className="font-medium mt-4">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full mt-2 p-2 border border-slate-300 rounded-lg outline-none focus:ring-1 focus:ring-[#b19316]"
            required
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="btn mt-5 w-full py-2.5 rounded-full bg-[#b19316] text-white hover:bg-indigo-600 transition"
          >
            Submit Form
          </button>
        </div>
      </form>
    </section>

    {/* MESSAGE NOTIFICATION - Bottom Right */}
    {showMessage && (
      <div className="fixed bottom-6 right-6 z-50">
        <Message
          status={messageStatus}
          onClose={() => setShowMessage(false)}
        />
      </div>
    )}
    </>
  );
}
