import React, { ReactNode } from "react";

const GreenBorderButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="flex-1 border-2 border-[#07a169] text-[#07a169] py-2 rounded-lg font-semibold hover:bg-[#07a169] hover:text-white">
      {children}
    </button>
  );
};

export default GreenBorderButton;
