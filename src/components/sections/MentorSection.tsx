"use client";

import assets from "@/assets";
import { useGetAllMentorsQuery } from "@/redux/feature/mentor.api";
import Image from "next/image";
import MentorCard from "./MentorCard";
import { TMentor } from "@/types";

const MentorsSection = () => {
  const { data: mentors, isLoading } = useGetAllMentorsQuery(undefined);
  return (
    <div className="relative w-full bg-[#f0f4f5] dark:bg-[#033423] py-16 lg:mtt-37.5 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center gap-4">
          <p className="font-nunito text-sm font-normal uppercase text-[#07a169]">
            প্রশিক্ষক
          </p>
          <div className="text-center">
            <h2 className="font-kalpurush text-4xl font-semibold text-[#00170f] dark:text-white md:text-5xl">
              অভিজ্ঞ শিক্ষক প্যানেল
            </h2>
            <Image
              alt="decorative line"
              src={assets.icons.brunsh}
              className="ml-auto mt-2 h-4"
            />
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mentors?.data?.map((mentor: TMentor, index: number) => (
            <MentorCard mentor={mentor} />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="rounded-lg bg-[#eb6e5c] px-7 py-3 font-kalpurush text-white font-normal">
            আরও দেখুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorsSection;
