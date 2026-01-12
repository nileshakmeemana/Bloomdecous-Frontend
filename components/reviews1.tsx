"use client";

import { useEffect, useState } from "react";
import { BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { Rating } from "@/components/rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

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

  /* =========================
     FETCH REVIEWS FROM PHP API
  ========================= */
  useEffect(() => {
    fetch(
      "http://localhost/Bloomdecous-Backend/API/Public/getAllReviewData.php",
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
        <div className="mb-8">
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
    </section>
  );
};

export { Reviews1 };
