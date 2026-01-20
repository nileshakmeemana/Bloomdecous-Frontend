"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { BadgeCheck, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Rating } from "@/components/rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Message from "@/sections/message";

/* =========================
   FRONTEND REVIEW TYPE
========================= */
interface Review {
  id: string;
  rating: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  verified?: boolean;
}

/* =========================
   BACKEND RESPONSE TYPE
========================= */
interface BackendReview {
  Id: string;
  Customer_Name: string;
  Star_Rating: string;
  Message: string;
  Is_Approved: string;
  Created_Date: string;
}

interface Reviews1Props {
  title?: string;
  className?: string;
}

const Reviews1 = ({
  title = "Customer Reviews",
  className,
}: Reviews1Props) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    status: "success" as "success" | "error",
    title: "",
    description: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    contact: "",
    address: "",
    rating: 0,
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectRating = (value: number) => {
    setFormData((prev) => ({ ...prev, rating: value }));
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
          contact: data.data.Customer_Contact || "",
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

  const handleCloseForm = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowForm(false);
      setIsClosing(false);
      setIsAnimating(false);
    }, 300); // Match animation duration
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://uat.orbislk.com/Bloomdecous-Backend/API/Public/saveReview.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            Customer_Name: formData.name,
            Customer_Contact: formData.contact,
            Customer_Email: formData.email,
            Customer_Address: formData.address,
            rating: String(formData.rating),
            Message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (!data.success) {
        setToast({
          open: true,
          status: "error",
          title: "Failed to submit review",
          description: data.message || "Please try again.",
        });
        return;
      }

      // Reset + close popup with animation
      setIsClosing(true);
      setTimeout(() => {
        setShowForm(false);
        setIsClosing(false);
        setIsAnimating(false);
        setToast({
          open: true,
          status: "success",
          title: "Review submitted successfully.",
          description: "Pending approval.",
        });
        setFormData({
          email: "",
          name: "",
          contact: "",
          address: "",
          rating: 0,
          message: "",
        });
      }, 300); // Match animation duration
    } catch (error) {
      console.error("Submit error:", error);
      setToast({
        open: true,
        status: "error",
        title: "Something went wrong",
        description: "Please try again.",
      });
    }
  };


  /* ANIMATE FORM ON OPEN
  ========================= */
  useEffect(() => {
    if (showForm) {
      // Trigger animation after a brief delay
      setTimeout(() => setIsAnimating(true), 10);
    }
  }, [showForm]);

  /* =========================
     =========================
     FETCH REVIEWS FROM PHP API
  ========================= */
  useEffect(() => {
    fetch(
      "https://uat.orbislk.com/Bloomdecous-Backend/API/Public/getAllReviewData.php",
      { cache: "no-store" }
    )
      .then((res) => res.json())
      .then((data: BackendReview[]) => {
        const mapped: Review[] = data
          .filter((r) => r.Is_Approved === "1")
          .map((r) => ({
            id: r.Id,
            rating: Number(r.Star_Rating),
            title: "Customer Review",
            content: r.Message,
            author: {
              name: r.Customer_Name,
            },
            date: new Date(r.Created_Date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),
            verified: true,
          }));

        setReviews(mapped);
      })
      .catch((err) => {
        console.error("Failed to load reviews:", err);
        setReviews([]);
      })
      .finally(() => setLoading(false));
  }, []);

  /* =========================
     STATES
  ========================= */
  if (loading) {
    return (
      <section className="py-20 text-center text-muted-foreground">
        Loading reviews...
      </section>
    );
  }

  if (!reviews.length) {
    return (
      <section className="py-20 text-center text-muted-foreground">
        No Reviews Available
      </section>
    );
  }

  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <section className={cn("flex items-center justify-center p-4 py-20", className)}>
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </h2>
            <div className="mt-2 flex items-center gap-3">
              <Rating rate={averageRating} className="[&_svg]:size-5" />
              <span className="text-sm text-muted-foreground">
                {averageRating.toFixed(1)} out of 5 · {reviews.length} reviews
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-full bg-[#b19316] px-6 py-4 text-sm font-medium text-white shadow-sm transition hover:bg-[#a18215] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a18215]"
          >
            Write a Review
          </button>
        </div>

        {/* Reviews List */}
        <div className="space-y-0">
          {reviews.map((review, index) => (
            <div key={review.id}>
              {index > 0 && <Separator className="my-6" />}
              <div className="space-y-3">
                <Rating rate={review.rating} className="[&_svg]:size-4" />

                <p className="text-sm leading-relaxed text-muted-foreground">
                  “{review.content}”
                </p>

                <div className="flex items-center gap-3">
                  <Avatar className="size-8">
                    <AvatarImage
                      src={review.author.avatar}
                      alt={review.author.name}
                    />
                    <AvatarFallback className="text-xs">
                      {review.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">{review.author.name}</span>

                    {review.verified && (
                      <span className="flex items-center gap-1 text-emerald-600">
                        <BadgeCheck className="size-4" />
                        <span className="text-xs">Verified</span>
                      </span>
                    )}

                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div 
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity duration-300",
            isClosing ? "opacity-0" : isAnimating ? "opacity-100" : "opacity-0"
          )}
        >
          <div 
            className={cn(
              "w-full max-w-lg rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
              isClosing ? "scale-95 opacity-0" : isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Write a Review</h3>
              <button
                type="button"
                onClick={handleCloseForm}
                className="text-sm text-muted-foreground hover:text-foreground cursor-pointer"
              >
                Close
              </button>
            </div>

            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={fetchCustomerByEmail}
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#b19316] focus:ring-1 focus:ring-[#b19316]"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Customer Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#b19316] focus:ring-1 focus:ring-[#b19316]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Contact Number</label>
                  <input
                    required
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#b19316] focus:ring-1 focus:ring-[#b19316]"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Customer Address</label>
                <input
                  required
                  type="text"
                  name="address"
                  value={formData.address.replace(/<[^>]*>/g, "")}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#b19316] focus:ring-1 focus:ring-[#b19316]"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Add Star Rating</label>
                <div className="mt-2 flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleSelectRating(star)}
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-medium transition cursor-pointer",
                        formData.rating >= star
                          ? "border-[#b19316] bg-[#f3e8a9] text-[#b19316]"
                          : "border-gray-200 text-gray-500 hover:border-[#b19316] hover:text-[#b19316]"
                      )}
                    >
                      <Star
                        className="size-4"
                        fill={formData.rating >= star ? "currentColor" : "none"}
                      />
                      <span className="sr-only">{star} Star</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Message*</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#b19316] focus:ring-1 focus:ring-[#b19316]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="cursor-pointer rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer rounded-full bg-[#b19316] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#9a7e13]"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {toast.open && (
        <Message
          status={toast.status}
          title={toast.title}
          description={toast.description}
          onClose={() => setToast((prev) => ({ ...prev, open: false }))}
        />
      )}
    </section>
  );
};

export { Reviews1 };
