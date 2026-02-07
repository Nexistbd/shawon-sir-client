"use client";

import Image from "next/image";

// Assets
const imgImages =
  "https://www.figma.com/api/mcp/asset/3e11b5a2-fbda-4934-91e6-cbbbe9f5faa4";
const imgVector =
  "https://www.figma.com/api/mcp/asset/bca9c869-fcb1-4eba-b201-d234866af144";
const imgIcon =
  "https://www.figma.com/api/mcp/asset/65f5a208-c4a8-4693-9878-225074b6e31a";
const imgUilCalender =
  "https://www.figma.com/api/mcp/asset/8ebd3139-7953-4a0a-a80e-186860d4c899";

interface CourseCardProps {
  title: string;
  description: string;
  lessons: number;
  students: number;
  duration: string;
  rating: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  lessons,
  students,
  duration,
  rating,
}) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    {/* Course Image */}
    <div className="relative h-60 bg-[#d5efde] overflow-hidden">
      <img src={imgImages} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-4 right-4 bg-[#ffc107] text-white text-xs font-bold px-3 py-1 rounded">
        20% ছাড়
      </div>
    </div>

    {/* Course Info */}
    <div className="p-6">
      {/* Meta Info */}
      <div className="flex justify-between items-center text-xs text-[#4d4d4d] mb-4">
        <div className="flex items-center gap-1">
          <span>📚 {lessons} পাঠ</span>
        </div>
        <div className="flex items-center gap-1">
          <span>👥 {students} ছাত্র</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={imgUilCalender} alt="calendar" className="w-4 h-4" />
          <span>{duration}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-[#00170f] mb-3 line-clamp-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#808080] mb-4">{description}</p>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-lg">
              ⭐
            </span>
          ))}
        </div>
        <span className="text-xs text-[#4d4d4d]">({rating})</span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 border-2 border-[#07a169] text-[#07a169] py-2 rounded-lg font-semibold hover:bg-[#07a169] hover:text-white">
          বিস্তারিত দেখুন
        </button>
        <button className="flex-1 bg-[#eb6e5c] text-white py-2 rounded-lg font-bold hover:opacity-90">
          এনরোল করুন
        </button>
      </div>
    </div>
  </div>
);

export const TrendingCoursesSection = () => {
  const courses: CourseCardProps[] = [
    {
      title: "50 দিনের চ্যালেঞ্জ GST B ইউনিট ব্যাচ",
      description:
        "আপনার ক্যারিয়ারকে শক্তিশালী করুন ডেটা সায়েন্সের দক্ষতা দিয়ে যা শিল্পে উচ্চ চাহিদায় রয়েছে।",
      lessons: 45,
      students: 520,
      duration: "3 মাস",
      rating: "4.8/5 রেটিং",
    },
    {
      title: "50 দিনের চ্যালেঞ্জ GST B ইউনিট ব্যাচ",
      description:
        "আপনার ক্যারিয়ারকে শক্তিশালী করুন ডেটা সায়েন্সের দক্ষতা দিয়ে যা শিল্পে উচ্চ চাহিদায় রয়েছে।",
      lessons: 45,
      students: 520,
      duration: "3 মাস",
      rating: "4.8/5 রেটিং",
    },
    {
      title: "50 দিনের চ্যালেঞ্জ GST B ইউনিট ব্যাচ",
      description:
        "আপনার ক্যারিয়ারকে শক্তিশালী করুন ডেটা সায়েন্সের দক্ষতা দিয়ে যা শিল্পে উচ্চ চাহিদায় রয়েছে।",
      lessons: 45,
      students: 520,
      duration: "3 মাস",
      rating: "4.8/5 রেটিং",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#07a169] text-sm font-['Kalpurush'] uppercase mb-4">
            ট্রেন্ডিং কোর্স
          </p>
          <h2 className="text-4xl lg:text-5xl font-['Kalpurush'] font-bold text-[#00170f] relative inline-block">
            আমাদের কোর্সসমূহ
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <img src={imgVector} alt="" className="h-4" />
            </div>
          </h2>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, idx) => (
            <CourseCard key={idx} {...course} />
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
