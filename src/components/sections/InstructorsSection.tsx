"use client";

import assets from "@/assets";
import Image from "next/image";

const imgImage =
  "https://www.figma.com/api/mcp/asset/5181fffb-58d9-4ad7-b82c-13389364d9cd";
const imgVector =
  "https://www.figma.com/api/mcp/asset/b13bd08f-0fa7-4a4a-9949-0fd409eb72ea";

interface InstructorCardProps {
  name: string;
  specialty: string;
  courses: string;
  experience: string;
}

const InstructorCard = ({
  name,
  specialty,
  courses,
  experience,
}: InstructorCardProps) => (
  <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
    <div className="relative h-64 bg-gray-200">
      <img alt={name} src={imgImage} className="h-full w-full object-cover" />
    </div>
    <div className="p-6 text-center">
      <h3 className="font-bold text-[#1e6850] text-xl">{name}</h3>
      <p className="font-medium text-[#eb6e5c] text-base mt-1">{specialty}</p>
      <div className="mt-4 flex justify-center gap-6 border-t border-gray-200 pt-4">
        <div>
          <p className="font-bold text-[#0f172b] text-lg">{courses}+</p>
          <p className="text-xs font-medium uppercase text-[#62748e]">কোর্স</p>
        </div>
        <div className="h-6 w-px bg-gray-300" />
        <div>
          <p className="font-bold text-[#0f172b] text-lg">{experience}</p>
          <p className="text-xs font-medium uppercase text-[#62748e]">
            অভিজ্ঞতা
          </p>
        </div>
      </div>
    </div>
  </div>
);

export function InstructorsSection() {
  const instructors = [
    {
      name: "Shahriar Sir",
      specialty: "English",
      courses: "15",
      experience: "৫ বছর",
    },
    {
      name: "Shahriar Sir",
      specialty: "English",
      courses: "15",
      experience: "৫ বছর",
    },
    {
      name: "Shahriar Sir",
      specialty: "English",
      courses: "15",
      experience: "৫ বছর",
    },
    {
      name: "Shahriar Sir",
      specialty: "English",
      courses: "15",
      experience: "৫ বছর",
    },
  ];

  return (
    <div className="relative w-full bg-[#f0f4f5] dark:bg-[#033423] py-16 ">
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
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
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
}
