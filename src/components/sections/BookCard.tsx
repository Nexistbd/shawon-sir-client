"use client";
interface BookCardProps {
  image: string;
  title: string;
  author: string;
  rating: string;
  reviews: string;
  price: string;
  badge: string;
}

const imgIcon =
  "https://www.figma.com/api/mcp/asset/611e366e-9ced-4d14-9b10-76ce76168672";

export const BookCard = ({
  image,
  title,
  author,
  rating,
  reviews,
  price,
  badge,
}: BookCardProps) => (
  <div className="flex flex-col gap-4">
    <div className="relative h-64 overflow-hidden rounded-xl bg-gray-200 dark:bg-[#04452e] shadow-sm">
      <img alt={title} src={image} className="h-full w-full object-cover" />
      <div className="absolute left-3 top-3 inline-block rounded-full bg-white bg-opacity-90 px-3 py-1 font-bold text-xs text-[#288b6a]">
        {badge}
      </div>
    </div>
    <div className="flex flex-col gap-3">
      <div>
        <h3 className="font-bold text-[#0f172b] dark:text-gray-200 text-base mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-[#62748e] dark:text-gray-300">{author}</p>
      </div>
      <div className="flex items-center gap-2">
        <img alt="star" src={imgIcon} className="h-4 w-4" />
        <span className="font-medium text-[#314158] dark:text-gray-400 text-sm">
          {rating}
        </span>
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
