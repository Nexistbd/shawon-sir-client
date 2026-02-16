"use client";

import assets from "@/assets";
import { useGetAllCourseQuery } from "@/redux/feature/courseApi";
import Image from "next/image";
import CourseCard from "./CourseCard";
import { TCourse } from "@/types";

// Assets

interface CourseCardProps {
  title: string;
  description: string;
  lessons: number;
  students: number;
  duration: string;
  rating: string;
}

export const TrendingCoursesSection = () => {
  const { data: courseList, isLoading } = useGetAllCourseQuery(undefined);
  return (
    <section className="mt-37.5 ">
      <div className="container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#07a169] text-sm font-['Kalpurush'] uppercase mb-4">
            ট্রেন্ডিং কোর্স
          </p>
          <h2 className="text-4xl lg:text-5xl font-['Kalpurush'] font-bold text-[#00170f] dark:text-white relative inline-block">
            আমাদের কোর্সসমূহ
            <div className="absolute -bottom-7  -right-4  ">
              <Image
                width={100}
                height={20}
                src={assets.icons.brunsh}
                alt="img"
                className="h-4"
              />
            </div>
          </h2>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courseList?.data?.map((course: TCourse) => (
            <CourseCard course={course} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-[#eb6e5c] text-white px-8 py-3 rounded-lg font-bold hover:opacity-90">
            আরও কোর্স দেখুন
          </button>
        </div>
      </div>
    </section>
  );
};
