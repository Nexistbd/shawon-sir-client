"use client";

import assets from "@/assets";
import { Star } from "lucide-react";
import Image from "next/image";

const imgReview1 =
  "https://www.figma.com/api/mcp/asset/e6bcfbc9-e7e4-4706-bf1e-1fb4c18ce278";
const imgReview2 =
  "https://www.figma.com/api/mcp/asset/810e13d1-c5cb-4db6-99d6-e487e7a8d94c";
const imgReview3 =
  "https://www.figma.com/api/mcp/asset/90158301-33b2-43e6-ac98-85bf7e014817";
const imgVector =
  "https://www.figma.com/api/mcp/asset/e7ad7d14-d1c2-4ab8-811c-e8c9a7ab7366";

interface ReviewCardProps {
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
}

const ReviewCard = ({ name, role, text, image, rating }: ReviewCardProps) => (
  <div className="rounded-3xl bg-white px-8 shadow-xl">
    {/* Stars */}

    {/* Review Text */}
    <p className="mb-6 text-base leading-relaxed text-[#737373]">{text}</p>

    {/* Reviewer Info */}
    <div className="flex items-center gap-4 border-t pt-4">
      <img
        alt={name}
        src={image}
        className="h-16 w-16 rounded-full border-4 border-white object-cover shadow-md"
      />
      <div>
        <h4 className="font-semibold text-[#292929]">{name}</h4>
        <p className="text-sm text-[#bfbfbf]">{role}</p>
      </div>
    </div>
  </div>
);

export function TestimonialsSection() {
  const reviews = [
    {
      name: "রাজু",
      role: "ছাত্র",
      text: "লোরেম ইপসাম ডোলর সিট অ্যামেট কনসেকটেটুর। ইটিয়াম আলট্রিসিজেস হ্যাবিট্যান্ট ফ্রিঞ্জিলা প্রেটিয়াম ভিভেররা ডায়াম লিও আইড। আলিকোয়াম nulla।",
      image: imgReview1,
      rating: 4.5,
    },
    {
      name: "জেনি",
      role: "ছাত্র",
      text: "লোরেম ইপসাম ডোলর সিট অ্যামেট কনসেকটেটুর। অ্যাক উট এট অ্যামেট ফেইগাট ইন্টারডাম উট। নেক বিবেন্ডাম আর্কু ফাউসিবাস নেক সাগিটিস ডিগনিসিম পুলভিনার। পেলেনটেস্কে কুয়াম আইড।",
      image: imgReview2,
      rating: 5,
    },
    {
      name: "জনি",
      role: "ছাত্র",
      text: "লোরেম ইপসাম ডোলর সিট অ্যামেট কনসেকটেটুর। নিভ ভিভেররা এজেস্টাস কুয়াম ফার্মেন্টাম। লেকটাস সাগিটিস এলিকুয়েট কনসেকটেটুর মুস।",
      image: imgReview3,
      rating: 4,
    },
  ];

  return (
    <div className="relative w-full  py-16 md:py-24 lg:py-32">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center gap-3">
          <p className="font-nunito text-sm font-normal uppercase text-[#288b6a]">
            প্রশংসাপত্র
          </p>
          <div className="text-center">
            <h2 className="font-kalpurush text-4xl font-semibold text-[#292929] dark:text-white md:text-5xl">
              মেধাবীদের স্বীকৃতি
            </h2>
            <Image
              alt="decorative line"
              src={assets.icons.brunsh}
              className="ml-auto mt-2 h-4"
            />
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}
