"use client";

import assets from "@/assets";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/heroImage.png";
import { LoginButton } from "@/components/shared/LoginSheet";

// Assets

export const HeroSection = () => {
  return (
    <section className="bg-white ">
      <div className="container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-9">
            {/* Label */}
            <div className="text-[#288b6a] text-sm font-['Kalpurush'] uppercase">
              আমাদের পোর্টালে স্বাগতম
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-[#00170f] text-5xl lg:text-6xl font-['Kalpurush'] font-bold">
                সাফল্যের{" "}
                <span className="bg-linear-to-r from-[#e64460] to-[#f9d252] bg-clip-text text-transparent">
                  নিশ্চয়তায়
                </span>
                <br />
                আমরা আছি তোমার পাশে
              </h1>
            </div>

            {/* Description */}
            <p className="text-[#808080] text-base leading-relaxed max-w-lg">
              আমাদের অনলাইন শিক্ষা প্ল্যাটফর্মে যোগ দিন এবং আপনার স্বপ্নের
              পাবলিক বিশ্ববিদ্যালয়ে ভর্তির জন্য প্রয়োজনীয় দক্ষতা অর্জন করুন।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-[#eb6e5c] relative text-white px-8 py-3 rounded-[10px] font-bold inline-flex items-center gap-3 hover:opacity-90">
                কোর্স খুঁজুন
                <Image
                  src={assets.icons.rectangle}
                  alt="arrow"
                  className="w-6 h-12 absolute right-0 "
                />
              </button>
              <LoginButton className="border-2 border-primary text-primary flex items-center gap-1.5 px-8 py-3 rounded-[10px] font-bold hover:bg-[#eb6e5c] hover:text-white">
                ফ্রি প্রস্তুতি
                <ArrowRight className="text-primary" />
              </LoginButton>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src={heroImage}
              alt="Hero"
              className="w-full rounded-lg"
              width={630}
              height={650}
            />

            {/* Stats Cards */}
            <div className="absolute border-e-2 border-b-2  border-r-primary border-b-primary top-8 left-8 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-[#00170f]">১০০%</div>
              <div className="text-sm text-[#171717]">সন্তুষ্ট</div>
            </div>
            <div className="absolute border-e-2 border-b-2  border-r-primary border-b-primary top-1/2 right-8 bg-white rounded-sm p-4 shadow-lg">
              <div className="text-2xl font-bold text-[#288b6a]">৩০কে+</div>
              <div className="text-sm text-[#171717]">শিক্ষার্থী</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
