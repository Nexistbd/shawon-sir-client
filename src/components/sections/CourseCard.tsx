import config from "@/config";
import { TCourse } from "@/types";
import { Clock, UserCog, Users } from "lucide-react";
import Image from "next/image";
import GreenBorderButton from "../shared/GreenButton";

interface CourseCardProps {
  course: TCourse;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => (
  <div className="bg-white dark:bg-[#063223] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    {/* Course Image */}
    <div className="relative h-60 bg-[#D5EFDE] overflow-hidden">
      <Image
        src={`${config.file_api}/${course.photoUrls}`}
        alt="image"
        width={380}
        height={280}
        className="w-full h-full p-2 rounded-2xl object-cover"
      />
      {/* <div className="absolute top-4 right-4 bg-[#ffc107] text-white text-xs font-bold px-3 py-1 rounded">
        20% ছাড়
      </div> */}
    </div>

    {/* Course Info */}
    <div className="p-6">
      {/* Meta Info */}
      <div className="flex justify-between items-center text-xs text-[#4d4d4d] dark:text-gray-200 mb-4">
        <div className="flex items-start gap-1">
          <Clock size={14} className="text-green" />
          {course.time}
        </div>
        <div className="flex items-start gap-1">
          <Users size={14} className="text-green" />
          {course.totalStudent}
        </div>
        {course.emergency && (
          <div className="flex items-center gap-1">
            <UserCog size={14} className="text-green" />
            {course.emergency}
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-[#00170f] dark:text-white mb-3 line-clamp-2">
        {course?.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#808080] dark:text-gray-300 mb-4">
        {course?.subtitle}
      </p>

      {/* Rating */}
      {/* <div className="flex items-center gap-2 mb-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-lg">
              ⭐
            </span>
          ))}
        </div>
        <span className="text-xs text-[#4d4d4d]">({rating})</span>
      </div> */}

      {/* Buttons */}
      <div className="flex gap-3">
        <GreenBorderButton title="বিস্তারিত দেখুন" />
        <button className="flex-1 bg-[#eb6e5c] text-white py-2 rounded-lg font-bold hover:opacity-90">
          এনরোল করুন
        </button>
      </div>
    </div>
  </div>
);

export default CourseCard;
