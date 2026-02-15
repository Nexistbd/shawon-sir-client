"use client";

import assets from "@/assets";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LoginButton } from "@/components/shared/LoginSheet";
import { useGetAllBannersQuery } from "@/redux/feature/banner.api";
import config from "@/config";

// Assets

export const HeroSection = () => {
  const { data, isLoading } = useGetAllBannersQuery(undefined);
  const bannerList = data?.data?.[0];
  const words = bannerList?.title?.split(" ");

  return (
    <section className=" pt-24 md:pt-40 ">
      <div className="container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-12 justify-between">
          {/* Left Content */}
          <div className="flex flex-col gap-9">
            {/* Label */}
            <div className="text-[#288b6a] dark:text-green-400 text-sm font-['Kalpurush'] uppercase">
              {bannerList?.subTitle1}
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-[#00170f] dark:text-white text-5xl lg:text-6xl font-['Kalpurush'] font-bold">
                {words?.[0]}{" "}
                <span className="bg-linear-to-r from-[#e64460] to-[#f9d252] bg-clip-text text-transparent">
                  {bannerList?.gradiantText}
                </span>{" "}
                {words?.slice(1).join(" ")}
              </h1>
            </div>

            {/* Description */}
            <p className="text-[#808080] dark:text-gray-300 text-base leading-relaxed max-w-lg">
              {bannerList?.subTitle2}
            </p>

            {/* CTA Buttons */}
            <div className="flex  items-center  gap-5">
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
              src={`${config.file_api}/${bannerList?.photoUrl}`}
              alt="Hero"
              className="w-full rounded-lg h-full max-h-150"
              width={600}
              height={620}
            />

            {/* Stats Cards */}
            <div className="absolute border-e-2 border-b-2  border-r-primary border-b-primary top-8 left-8 bg-white rounded-lg px-4 py-1 shadow-lg w-36">
              <div className="text-2xl font-bold text-[#00170f]">১০০%</div>
              <div className="text-sm text-[#171717]">সন্তুষ্ট</div>
            </div>
            <div className="absolute border-e-2 border-b-2  border-r-primary border-b-primary top-1/2 right-8 bg-white rounded-sm  px-4 py-1 shadow-lg w-36">
              <div className="text-2xl font-bold text-[#288b6a]">৩০কে+</div>
              <div className="text-sm text-[#171717]">শিক্ষার্থী</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
