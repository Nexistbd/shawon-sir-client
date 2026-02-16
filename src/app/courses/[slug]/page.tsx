import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock,
  Eye,
  Star,
  Users,
  Award,
  Infinity,
  CalendarCheck,
} from "lucide-react";
import Image from "next/image";

// Mock data - Replace with actual data fetching
const courseData = {
  name: "50 Days Challenge GST B Unit Batch",
  subtitle: "50 Days Challenge GST B Unit Crash Course",
  banner:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop",
  thumbnail:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  regularPrice: 8000,
  discountPrice: 8400,
  rating: 4.85,
  totalRatings: "4.85 হাজি",
  totalStudents: "৪ হাজার",
  views: "45 লাখ",
  publishDate: "28 Oct, 2025",
  description:
    "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ut voluptate.",
  features: [
    { icon: Users, label: "৪ হাজার শিক্ষার্থী" },
    { icon: CalendarCheck, label: "ও সময় নথিভুক্তি" },
    { icon: Award, label: "ডিজিটাল সনদপত্র" },
    { icon: Infinity, label: "সীমাহীন এক্সেস" },
  ],
  modules: [
    {
      title: "কোর্স বিবরণ",
      name: "50 দিনের চ্যালেঞ্জ GST B ইউনিট ব্যাচ",
      description:
        "লোরেম ইপসাম নেই খুদ নেই, মধ্যম তিতাম, নিশিও নিয়াই নিয়াই নোস্ট্রাম লোরাম কোয়া জারা শরীরে একটি অবাঞ্ছিত সাধনা এবং তিনি সব সময় শারীরিক উপশম করতে চেয়েছিলেন বাণিজ্যিক বাণিজ্যিক নিরাপদ হতে পদক্ষেপ তাই সবসময় করাবে কোম্পানির উভয় নিয়ত একই বাজি একই শিক্ষার কোন তারিখ সিদ্ধান্ত অনিয়মিত।",
      whatWeLearn: [
        "It has survived not only five centuries",
        "Lorem Ipsum is simply dummy text of the new design",
        "Printing and type setting ipsum",
        "Take a look at our round up of the best shows",
      ],
    },
  ],
  expandableSections: [
    { title: "জনসাধারণ হিসাবে মানুষ", items: [] },
    { title: "বিবরণ", items: [] },
  ],
};

const CourseDetailsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <Image
          src={courseData.banner}
          alt={courseData.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {courseData.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              {courseData.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Content Header */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Course Content</h2>
            </div>

            {/* Course Module Card */}
            {courseData.modules.map((module, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {module.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Course Name */}
                  <h3 className="text-lg font-semibold">{module.name}</h3>

                  {/* Rating and Stats */}
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 opacity-50" />
                      <span className="ml-1 font-medium">
                        ({courseData.totalRatings})
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{courseData.totalStudents} জন</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{courseData.views} বার</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{courseData.publishDate}</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </p>

                  <Separator />

                  {/* What We'll Learn */}
                  <div>
                    <h4 className="font-semibold mb-4">আমরা কী শিখব?</h4>
                    <div className="space-y-3">
                      {module.whatWeLearn.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Expandable Sections */}
            {courseData.expandableSections.map((section, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-md transition-shadow"
              >
                <CardContent className="py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{section.title}</h3>
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  {/* Course Thumbnail */}
                  <div className="relative h-48 w-full rounded-lg overflow-hidden">
                    <Image
                      src={courseData.thumbnail}
                      alt={courseData.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-red-500/20" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-400 text-black font-bold text-lg px-4 py-2">
                        50 Days Challenge
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-red-600 text-white font-bold text-xl px-4 py-2">
                        GST B Unit Batch
                      </Badge>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-green-600">
                        ৳{courseData.discountPrice.toLocaleString()}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        ৳{courseData.regularPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {courseData.description}
                  </p>

                  <Separator />

                  {/* Course Features */}
                  <div>
                    <h4 className="font-semibold mb-4">Course Features</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {courseData.features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                          <div
                            key={idx}
                            className="flex flex-col items-center text-center gap-2"
                          >
                            <div className="bg-green-100 p-3 rounded-full">
                              <Icon className="h-5 w-5 text-green-600" />
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {feature.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Enrollment Button */}
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold"
                  >
                    নথিভুক্তি করুন
                  </Button>
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
