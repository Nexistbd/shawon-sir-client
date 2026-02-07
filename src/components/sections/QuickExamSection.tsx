"use client";

const imgVector =
  "https://www.figma.com/api/mcp/asset/5f61d615-db73-4c37-ab29-c3b6364d1ad8";
const imgIcon =
  "https://www.figma.com/api/mcp/asset/e7e87343-7d0b-474f-acdb-f17f66bdee61";
const imgIcon1 =
  "https://www.figma.com/api/mcp/asset/8c94dd27-3f25-46b7-8493-1279e894dfa7";
const imgIcon2 =
  "https://www.figma.com/api/mcp/asset/d3cd7b99-ae28-434e-99bc-47fcd6f3f5f8";
const imgIcon3 =
  "https://www.figma.com/api/mcp/asset/468f4a7f-58e7-46e5-b797-20972b9945ea";
const imgIcon4 =
  "https://www.figma.com/api/mcp/asset/d7b0704b-5b43-4667-b0b0-c464fc4b4153";
const imgIcon5 =
  "https://www.figma.com/api/mcp/asset/6105cb21-ab1f-484a-9a52-0b8a966ddbf7";
const imgIcon6 =
  "https://www.figma.com/api/mcp/asset/8d43036b-7677-495a-b8e1-63ff901f174e";
const imgIcon7 =
  "https://www.figma.com/api/mcp/asset/46f03ef0-9c7f-4318-9962-806ab66f6579";
const imgIcon8 =
  "https://www.figma.com/api/mcp/asset/31e4f1ba-d4f7-4d93-93d3-39e807092bd7";
const imgIcon9 =
  "https://www.figma.com/api/mcp/asset/1fab9898-3102-479c-b7de-02b303c571bd";
const imgIcon10 =
  "https://www.figma.com/api/mcp/asset/b5726ffc-a8e4-4a44-b692-5a6c2b898c3b";
const imgIcon11 =
  "https://www.figma.com/api/mcp/asset/f4d56410-4582-47dd-853f-019e931fbfb6";
const imgIcon12 =
  "https://www.figma.com/api/mcp/asset/aef9d331-8f21-4df6-973b-b0f38de37091";
const imgIcon13 =
  "https://www.figma.com/api/mcp/asset/8fe17f11-79e0-4427-8799-ad8c8b8decb0";
const imgIcon14 =
  "https://www.figma.com/api/mcp/asset/0ddb424f-9773-4cc3-a957-571b213e63b2";

export function QuickExamSection() {
  return (
    <div className="relative w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center gap-3">
          <p className="font-kalpurush text-sm font-normal uppercase text-[#07a169]">
            এক্সাম
          </p>
          <div className="text-center">
            <h2 className="font-kalpurush text-4xl font-semibold text-[#292929] md:text-5xl">
              কুইক এক্সাম
            </h2>
            <img
              alt="decorative line"
              src={imgVector}
              className="mx-auto mt-2 h-4"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left Section - Features */}
          <div className="flex flex-col gap-4 lg:w-1/3">
            <div className="flex items-center gap-3">
              <span className="inline-block rounded-full bg-[#eaf3f0] px-3 py-1 font-nunito text-xs font-bold text-[#288b6a]">
                New
              </span>
              <h3 className="font-nunito text-2xl font-semibold text-[#292929]">
                এক্সাম দিন
              </h3>
            </div>
            <p className="font-nunito text-base text-[#292929]">
              ২–১০ মিনিটে ঝটপট প্র্যাকটিস করে স্কোর দেখুন।
            </p>

            {/* Features Badges */}
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <div className="flex items-center gap-1 rounded-lg border border-[#f1f5f9] bg-white px-3 py-2 shadow-sm">
                <img alt="timed" src={imgIcon} className="h-4 w-4" />
                <span className="font-nunito text-xs text-[#999]">টাইমড</span>
              </div>
              <div className="flex items-center gap-1 rounded-lg border border-[#f1f5f9] bg-white px-3 py-2 shadow-sm">
                <img alt="instant result" src={imgIcon1} className="h-4 w-4" />
                <span className="font-nunito text-xs text-[#999]">
                  ইনস্ট্যান্ট রেজাল্ট
                </span>
              </div>
              <div className="flex items-center gap-1 rounded-lg border border-[#f1f5f9] bg-white px-3 py-2 shadow-sm">
                <img alt="solutions" src={imgIcon2} className="h-4 w-4" />
                <span className="font-nunito text-xs text-[#999]">
                  ব্যাখ্যাসহ সমাধান
                </span>
              </div>
            </div>

            {/* View All Link */}
            <div className="flex items-center gap-2 text-[#288b6a]">
              <span className="font-nunito font-bold">সব পরীক্ষা দেখুন</span>
              <img alt="arrow" src={imgIcon3} className="h-4 w-4" />
            </div>
          </div>

          {/* Right Section - Exam List */}
          <div className="lg:w-2/3">
            <div className="grid gap-4">
              {/* Trending Exams */}
              <div className="mb-6 flex gap-4 border-b border-[#f1f5f9] pb-4">
                <button className="flex items-center gap-2 font-bold text-[#292929]">
                  <img alt="trending" src={imgIcon7} className="h-4 w-4" />
                  ট্রেন্ডিং
                </button>
                <button className="flex items-center gap-2 font-bold text-[#90a1b9]">
                  <img alt="popular" src={imgIcon8} className="h-4 w-4" />
                  জনপ্রিয়
                </button>
              </div>

              {/* Exam Items */}
              <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf3f0]">
                    <img alt="exam" src={imgIcon9} className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-[#292929]">
                      BCS প্রিলি মক টেস্ট
                    </h4>
                    <div className="mt-1 flex gap-2 text-xs text-[#999]">
                      <span>⏱ ২০ মিনিট</span>
                      <span>❓ 25 প্রশ্ন</span>
                      <span className="inline-flex items-center gap-1 text-[#eb6e5c]">
                        <img alt="hot" src={imgIcon10} className="h-3 w-3" />
                        Hot
                      </span>
                    </div>
                  </div>
                </div>
                <button className="rounded-lg bg-[#288b6a] px-4 py-2 font-bold text-white">
                  পরীক্ষা দিন
                </button>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f5f9]">
                    <img alt="exam" src={imgIcon11} className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-[#292929]">
                      IELTS রিডিং প্র্যাকটিস
                    </h4>
                    <div className="mt-1 flex gap-2 text-xs text-[#999]">
                      <span>⏱ ১৫ মিনিট</span>
                      <span>❓ 20 প্রশ্ন</span>
                    </div>
                  </div>
                </div>
                <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-bold text-[#292929]">
                  দেখুন
                </button>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f5f9]">
                    <img alt="exam" src={imgIcon12} className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-[#292929]">
                      সাধারণ জ্ঞান (GK) টেস্ট
                    </h4>
                    <div className="mt-1 flex gap-2 text-xs text-[#999]">
                      <span>⏱ ১০ মিনিট</span>
                      <span>❓ 15 প্রশ্ন</span>
                    </div>
                  </div>
                </div>
                <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-bold text-[#292929]">
                  দেখুন
                </button>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f5f9]">
                    <img alt="exam" src={imgIcon13} className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-[#292929]">
                      গণিত শর্ট টেস্ট
                    </h4>
                    <div className="mt-1 flex gap-2 text-xs text-[#999]">
                      <span>⏱ ১২ মিনিট</span>
                      <span>❓ 15 প্রশ্ন</span>
                    </div>
                  </div>
                </div>
                <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-bold text-[#292929]">
                  দেখুন
                </button>
              </div>

              <a
                href="#"
                className="flex items-center gap-2 text-[#eb6e5c] font-medium mt-4"
              >
                আরও দেখুন
                <img alt="arrow" src={imgIcon14} className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
