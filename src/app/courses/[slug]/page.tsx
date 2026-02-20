"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import config from "@/config";
import { useGetSingleCourseQuery } from "@/redux/feature/courseApi";
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock,
  Eye,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { use } from "react";
import parse from "html-react-parser";
import CourseAccordian from "@/components/features/CourseAccordian";
import Link from "next/link";

type TCourseDetailsProps = {
  params: Promise<{ slug: string }>;
};

const CourseDetailsPage = ({ params }: TCourseDetailsProps) => {
  const param = use(params);
  const slug = param.slug;
  const { data: courseData, isLoading } = useGetSingleCourseQuery(slug);

  return (
    <div className=" h-full bg-[#F3F4F5]">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <Image
          src={`${config.file_api}/${courseData?.data?.photoUrls}`}
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {courseData?.data?.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              {courseData?.data?.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl  mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="order-2 lg:order-1 lg:col-span-2 space-y-6">
            {/* Course Content Header */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Course Content</h2>
            </div>

            {/* Course Module Card */}

            <div>
              {/* Course Name */}
              <h3 className="text-lg font-semibold">
                {courseData?.data?.subtitle}
              </h3>
              <Separator />

              <CourseAccordian course={courseData?.data} />
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="order-1 lg:order-2 lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  {/* Course Thumbnail */}
                  <div className="relative h-48 w-full rounded-lg overflow-hidden">
                    <Image
                      src={`${config.file_api}/${courseData?.data?.photoUrls}`}
                      alt={courseData?.data?.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-red-500/20" />
                  </div>

                  {/* Pricing */}
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-green-600">
                        ৳{courseData?.data?.regular_fees?.toLocaleString()}
                      </span>

                      {courseData?.data?.discount_fees > 0 && (
                        <span className="text-lg text-muted-foreground line-through">
                          ৳{courseData?.data?.discount_fees?.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {courseData?.data?.subtitle}
                  </p>

                  {/* Course Features */}
                  <div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="bg-green-100 p-3 rounded-full">
                          <Clock className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {courseData?.data?.time}
                        </span>
                      </div>
                      {/*  */}
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="bg-green-100 p-3 rounded-full">
                          <Users className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {courseData?.data?.totalStudent} ভর্তি হয়েছে
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Enrollment Button */}
                  <Link href={`/courses/enroll/${courseData?.data?._id}`}>
                    <Button
                      size="lg"
                      className="w-full bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold"
                    >
                      এনরোল করুন
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
