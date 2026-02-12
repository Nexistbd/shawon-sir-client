import { Facebook, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#1C1E27] text-white h-20 flex flex-col justify-center">
      <div className="flex justify-between items-center  container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>@ Copyright {currentYear} by Shawon Sir </p>
        <div>
          @ Design and Developed By{" "}
          <Link
            href="https://www.nexist.info/"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Nexist
          </Link>{" "}
        </div>

        <div className="flex">
          <Facebook /> <Youtube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
