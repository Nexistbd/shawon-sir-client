"use client";

const imgImageEffectiveStudyHabits =
  "https://www.figma.com/api/mcp/asset/f4592428-f46e-4a62-83f4-ff7f192f58d0";
const imgImageCalculusMadeEasy =
  "https://www.figma.com/api/mcp/asset/8cbc60ec-8856-4fc0-a85c-175852ef1a41";
const imgImageCreativeThinking =
  "https://www.figma.com/api/mcp/asset/43ae371a-24cc-414b-a29a-009bef524f39";
const imgImagePhysicsEngineering =
  "https://www.figma.com/api/mcp/asset/f3c0fbc4-afe8-4384-b35e-e0cf2b9d0dc0";
const imgVector =
  "https://www.figma.com/api/mcp/asset/7055b104-c00b-4947-8b19-65eae8b067d2";
const imgIcon =
  "https://www.figma.com/api/mcp/asset/611e366e-9ced-4d14-9b10-76ce76168672";

interface BookCardProps {
  image: string;
  title: string;
  author: string;
  rating: string;
  reviews: string;
  price: string;
  badge: string;
}

const BookCard = ({
  image,
  title,
  author,
  rating,
  reviews,
  price,
  badge,
}: BookCardProps) => (
  <div className="flex flex-col gap-4">
    <div className="relative h-64 overflow-hidden rounded-xl bg-gray-200 shadow-sm">
      <img alt={title} src={image} className="h-full w-full object-cover" />
      <div className="absolute left-3 top-3 inline-block rounded-full bg-white bg-opacity-90 px-3 py-1 font-bold text-xs text-[#288b6a]">
        {badge}
      </div>
    </div>
    <div className="flex flex-col gap-3">
      <div>
        <h3 className="font-bold text-[#0f172b] text-base mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-[#62748e]">{author}</p>
      </div>
      <div className="flex items-center gap-2">
        <img alt="star" src={imgIcon} className="h-4 w-4" />
        <span className="font-medium text-[#314158] text-sm">{rating}</span>
        <span className="text-xs text-[#90a1b9]">({reviews})</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-[#288b6a] text-xl">{price}</p>
        <button className="rounded-lg bg-[#288b6a] px-3 py-2 font-medium text-sm text-white">
          এখনই কিনুন
        </button>
      </div>
    </div>
  </div>
);

export function BooksSection() {
  const books = [
    {
      image: imgImageEffectiveStudyHabits,
      title: "সফলতার জন্য কার্যকর অধ্যয়ন অভ্যাস",
      author: "ড. সারাহ থম্পসন",
      rating: "4.8",
      reviews: "120",
      price: "৳২৪০.৯৯",
      badge: "হার্ডকপি",
    },
    {
      image: imgImageCalculusMadeEasy,
      title: "ক্যালকুলাস মেইড ইজি: একটি সম্পূর্ণ গাইড",
      author: "প্রফেসর জেমস মিলার",
      rating: "4.9",
      reviews: "85",
      price: "৳২৪০.৯৯",
      badge: "পিডিএফ",
    },
    {
      image: imgImageCreativeThinking,
      title: "সৃজনশীল চিন্তার শিল্প",
      author: "এলেনা রদ্রিগেজ",
      rating: "4.6",
      reviews: "210",
      price: "৳২৪০.৯৯",
      badge: "স্টকে আছে",
    },
    {
      image: imgImagePhysicsEngineering,
      title: "ইঞ্জিনিয়ারিং ছাত্রদের জন্য পদার্থবিদ্যা",
      author: "রবার্ট চেন",
      rating: "4.7",
      reviews: "45",
      price: "৳২৪০.৯৯",
      badge: "হার্ডকপি",
    },
  ];

  return (
    <div className="relative w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center gap-3">
          <p className="font-kalpurush text-sm font-normal uppercase text-[#07a169]">
            প্রকাশনী
          </p>
          <div className="text-center">
            <h2 className="font-kalpurush text-4xl font-semibold text-[#00170f] md:text-5xl">
              আমাদের বইসমূহ
            </h2>
            <img
              alt="decorative line"
              src={imgVector}
              className="mx-auto mt-2 h-4"
            />
          </div>
        </div>

        {/* Books Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
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
