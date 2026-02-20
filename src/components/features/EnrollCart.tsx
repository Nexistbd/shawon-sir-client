"use client";

import { Badge } from "@/components/ui/badge";
import config from "@/config";
import Image from "next/image";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

type TEnrollCart = {
  category: string;
  baseFee: number;
  discountAmount: number;
  discountedPrice?: number;

  // Backend-compatible format
  netPayable: number;
  totalPaid: number;

  discountValue?: string;
  totalAmount: string | number;
  courseData: {
    photoUrls: string;
    name: string;
  };
};

const EnrollCart: React.FC<TEnrollCart> = ({
  category,
  courseData,
  baseFee,
  discountAmount,

  // Backend-compatible format
  netPayable,
  totalPaid,
}) => {
  return (
    <div className="bg-white dark:bg-[#020A1A] border drop-shadow-2xl">
      <div className="flex items-center justify-between border border-[#2E02B2] bg p-6 m-5 py-2.5">
        <div>
          <Image
            src={`${config.file_api}/${courseData?.photoUrls}`}
            alt="Course Image"
            width={100}
            height={40}
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="mb-1.5 font-bold">{courseData?.name}</h3>
          <Badge>
            <span className="text-xs">Category:</span>
            <span className="ml-1 text-sm">
              {category?.toLocaleUpperCase()}
            </span>
          </Badge>
        </div>
      </div>

      {/* Calculation */}
      <div className="mt-10 grid grid-cols-2 gap-2.5 justify-between p-5 w-full">
        <p>Course Fees</p>
        <div className="text-end flex items-center justify-end font-bold">
          <TbCurrencyTaka />
          {baseFee}
          /-
        </div>

        <p>Discount</p>
        <div className="text-end flex items-center justify-end font-bold text-green-600">
          - <TbCurrencyTaka />
          {discountAmount || 0}
          /-
        </div>
      </div>

      <hr />

      <div className="flex justify-between mt-1.5 px-5 font-bold">
        <p>NetPayable</p>
        <div className="flex items-center font-bold">
          <TbCurrencyTaka />
          {netPayable}
          /-
        </div>
      </div>

      {/* Payment breakdown */}
      <div className="w-[60%] flex justify-between ml-auto p-5 border-b mb-1.5 text-primary">
        <p>Pay Now</p>
        <div className="flex items-center font-bold">
          <TbCurrencyTaka />
          {totalPaid}
          /-
        </div>
      </div>
    </div>
  );
};

export default EnrollCart;
