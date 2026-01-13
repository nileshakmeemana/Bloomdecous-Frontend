"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/section-title";
import { StarIcon } from "lucide-react";

export default function OurTestimonialSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "http://localhost/Bloomdecous-Backend/API/Public/getRecentReviews.php",
      { cache: "no-store" }
    )
      .then((res) => res.json())
      .then((data) => {
        const approvedReviews = data.filter(
          (item) => item.Is_Approved === "1"
        );
        setReviews(approvedReviews);
      })
      .catch((err) => {
        console.error("Failed to fetch testimonials:", err);
        setReviews([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="flex flex-col items-center justify-center mt-40">
      <SectionTitle
        title="Our Testimonials"
        subtitle="Discover why clients choose BloomdecoUS for elegant, stress-free event décor and unforgettable celebrations."
      />

      {/* STATES */}
      {loading && (
        <p className="mt-12 text-gray-500">Loading testimonials...</p>
      )}

      {!loading && reviews.length === 0 && (
        <p className="mt-12 text-gray-500">No Testimonials Available</p>
      )}

      {/* TESTIMONIALS */}
      {!loading && reviews.length > 0 && (
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((item) => (
            <div
              key={item.Id}
              className="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-5 text-gray-500 transition-all duration-300 hover:-translate-y-1"
            >
              {/* STAR RATING */}
              <div className="flex gap-1">
                {[...Array(Number(item.Star_Rating))].map((_, index) => (
                  <StarIcon
                    key={index}
                    className="size-4 fill-gray-600 text-gray-600"
                  />
                ))}
              </div>

              {/* MESSAGE */}
              <p className="line-clamp-3">“{item.Message}”</p>

              {/* AUTHOR */}
              <div className="flex items-center gap-2 pt-3">
                <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
                  {item.Customer_Name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>
                  <p className="font-medium text-gray-800">
                    {item.Customer_Name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {new Date(item.Created_Date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
