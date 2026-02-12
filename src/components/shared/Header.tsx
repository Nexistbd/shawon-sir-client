import assets from "@/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full max-w-7xl mx-auto shadow-2xl px-2 container ">
      {/* logo */}
      <Image src={assets.logo.logoSvg} alt="Logo" />
    </div>
  );
};

export default Header;
