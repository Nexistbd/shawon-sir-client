"use client";

import Image from "next/image";

// Assets
const imgShape =
  "https://www.figma.com/api/mcp/asset/07880b34-29ab-4154-81f8-bcef89d8f471";
const imgImage =
  "https://www.figma.com/api/mcp/asset/851ea909-5db5-4cb0-8531-04b4ee3f3587";
const imgIcon =
  "https://www.figma.com/api/mcp/asset/8e76ec38-06ff-4990-b065-ef2d0168e20c";
const imgRectangle16 =
  "https://www.figma.com/api/mcp/asset/c04a5fa7-ac6d-4a1a-af9c-da289bfea190";
const imgIcon1 =
  "https://www.figma.com/api/mcp/asset/31f0de6b-0bf8-4b31-8a4d-47a75b1886a9";

export const HeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <span className="bg-gradient-to-r from-[#e64460] to-[#f9d252] bg-clip-text text-transparent">
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
              <button className="bg-[#eb6e5c] text-white px-8 py-3 rounded-[10px] font-bold inline-flex items-center gap-3 hover:opacity-90">
                কোর্স খুঁজুন
                <img src={imgIcon} alt="arrow" className="w-5 h-5" />
              </button>
              <button className="border-2 border-[#eb6e5c] text-[#eb6e5c] px-8 py-3 rounded-[10px] font-bold hover:bg-[#eb6e5c] hover:text-white">
                ফ্রি প্রস্তুতি
                <img
                  src={imgIcon1}
                  alt="arrow"
                  className="w-5 h-5 inline ml-3"
                />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img src={imgImage} alt="Hero" className="w-full rounded-lg" />
            {/* Stats Cards */}
            <div className="absolute bottom-8 left-8 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-[#00170f]">১০০%</div>
              <div className="text-sm text-[#171717]">সন্তুষ্ট</div>
            </div>
            <div className="absolute top-1/2 right-8 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-[#288b6a]">৩০কে+</div>
              <div className="text-sm text-[#171717]">ছাত্র বিশ্বব্যাপী</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
