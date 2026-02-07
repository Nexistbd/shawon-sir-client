"use client";

import Image from "next/image";

// Assets
const imgImageClass =
  "https://www.figma.com/api/mcp/asset/8f80b031-9b7e-4421-9c86-a37933e5fe4b";
const imgImageClass1 =
  "https://www.figma.com/api/mcp/asset/c0e373e2-a3d4-462b-9dc6-52113eeeb7d3";
const imgVector =
  "https://www.figma.com/api/mcp/asset/c641ea0c-7186-411c-9c0f-5299fdc75e80";
const imgIcon =
  "https://www.figma.com/api/mcp/asset/ad7c9283-130c-4154-903f-d39d83faae8b";
const imgIcon1 =
  "https://www.figma.com/api/mcp/asset/80632ca7-16b0-4161-bd59-a16e289f688c";

interface ClassCardProps {
  image: string;
  duration: string;
  title: string;
  icon: string;
}

const ClassCard: React.FC<ClassCardProps> = ({
  image,
  duration,
  title,
  icon,
}) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <div className="relative h-64 bg-gradient-to-b from-transparent to-black/30">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur rounded-full w-16 h-16 flex items-center justify-center">
          <img src={icon} alt="play" className="w-6 h-6" />
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-t from-black/80 to-transparent p-6 absolute bottom-0 w-full">
      <div className="bg-[#ff7f50] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
        {duration}
      </div>
      <h3 className="text-white text-lg font-bold">{title}</h3>
    </div>
  </div>
);

export const TrendingClassesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#07a169] text-sm font-['Kalpurush'] uppercase mb-4">
            ট্রেন্ডিং ক্লাস
          </p>
          <h2 className="text-4xl lg:text-5xl font-['Kalpurush'] font-bold text-[#00170f] relative inline-block">
            ফ্রি ক্লাস
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <img src={imgVector} alt="" className="h-4" />
            </div>
          </h2>
        </div>

        {/* Class Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ClassCard
            image={imgImageClass}
            duration="15 মিনিট"
            title="পাইথন প্রোগ্রামিংয়ের পরিচিতি"
            icon={imgIcon}
          />
          <ClassCard
            image={imgImageClass1}
            duration="24 মিনিট"
            title="শুরু করার জন্য ডিজাইন নীতিগুলি"
            icon={imgIcon1}
          />
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-[#eb6e5c] text-white px-8 py-3 rounded-lg font-bold hover:opacity-90">
            আরও দেখুন
          </button>
        </div>
      </div>
    </section>
  );
};
