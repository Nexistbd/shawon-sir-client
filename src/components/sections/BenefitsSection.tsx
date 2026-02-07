"use client";

import assets from "@/assets";
import Image from "next/image";

export const BenefitsSection = () => {
  return (
    <section className="bg-[#f2f2f2] border-t border-b border-[#e3e3e3] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#288b6a]">
                <Image src={assets.icons.pc} alt="pc" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00170f] mb-2">
                ২৪,০০০-এরও বেশি ভিডিও কোর্স
              </h3>
              <p className="text-[#808080] text-sm">
                অ্যাক্সেসের মাধ্যমে দক্ষতা অর্জন করুন।
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#288b6a]">
                <Image src={assets.icons.man} alt="man" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00170f] mb-2">
                শিল্প বিশেষজ্ঞদের কোর্স
              </h3>
              <p className="text-[#808080] text-sm">
                শিল্প বিশেষজ্ঞদের দ্বারা শেখানো কোর্সগুলি থেকে শিখুন।
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#288b6a]">
                <Image src={assets.icons.file} alt="file" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00170f] mb-2">
                যেকোনো সময়, যেকোনো জায়গায়
              </h3>
              <p className="text-[#808080] text-sm">
                যেকোনো ডিভাইসে সীমাহীন অ্যাক্সেস সহ শিখুন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
