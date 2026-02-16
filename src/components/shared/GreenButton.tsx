import React from "react";

const GreenBorderButton = ({ title }: { title: string }) => {
  return (
    <button className="flex-1 border-2 border-[#07a169] text-[#07a169] py-2 rounded-lg font-semibold hover:bg-[#07a169] hover:text-white">
      {title}
    </button>
  );
};

export default GreenBorderButton;
