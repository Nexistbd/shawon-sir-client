import { Facebook, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#1C1E27] mt-37.5 text-white h-24 flex flex-col justify-center py-2.5">
      <div className="flex justify-between items-center py-2.5 container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>@ Copyright {currentYear} by Shawon Sir </p>
        <div className="hidden lg:block">
          @ Design and Developed By{" "}
          <Link
            href="https://www.nexist.info/"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Nexist
          </Link>{" "}
        </div>

        <div className="flex gap-2.5">
          <Facebook /> <Youtube />
        </div>
      </div>
      <div className="lg:hidden border-t border-gray-500 py-1.5 pb-3 mt-1.5 ">
        @ Design and Developed By{" "}
        <Link
          href="https://www.nexist.info/"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Nexist
        </Link>{" "}
      </div>
    </div>
  );
};

export default Footer;
