import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const ImgCard = ({pic,picName}) => {
  return (
    <div class="relative group flex overflow-hidden rounded-lg">
      <img
        src={pic}
        className="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#CC7B7B]/20 backdrop-blur-sm">
        <p className="text-black text-lg font-semibold">{picName}</p>
        <button className="flex items-center gap-1 bg-stone-700 text-white px-2 py-1 border-1 border-black">Request <FaArrowRight /></button>
      </div>
    </div>
  );
};

export default ImgCard;
