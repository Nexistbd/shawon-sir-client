"use client";
import Link from "next/link";
import React from "react";

const ManualPayment = () => {
  return (
    <div className="bg-liner-to-r from-neutral-900 to-blue-700 w-full h-full mb-10 ">
      <div className="py-5 mx-auto text-center">
        <p className="text-2xl text-slate-200 font-bold px-2">
          {" "}
          Career Aid - এ ভর্তির জন্য পেমেন্ট করতে তোমার{" "}
          <span className="text-[#EF006B]"> বিকাশ </span> থেকে সেন্ড মানি করো,
          নিচের নাম্বারে
          <br /> এবং তথ্যগুলো সাবমিট করো{" "}
        </p>
        <ul className="text-white text-lg">
          <li>
            👉সেন্ডমানি বিকাশ-{" "}
            <span className="text-[#EF006B] text-xl mt-1.5 font-bold">
              {" "}
              01730305216{" "}
            </span>{" "}
            .{" "}
          </li>
        </ul>
        <Link className="text-white " href="https://wa.me/+8801730305216">
          {" "}
          এবং যোগাযোগ করুন
          <span className="mx-2 cursor-pointer text-amber-400">Click Here</span>
        </Link>
      </div>
    </div>
  );
};

export default ManualPayment;
