import React from "react";
import { useNavigate } from "react-router-dom";
const ImgCard = ({ pic, picName, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };
  return (
    <div className=" w-full h-[200px] relative group flex justify-center overflow-hidden rounded-lg">
      <img src={pic} className="object-cover object-center" />
      <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/40 backdrop-blur-sm desc">
        <p className="text-[#000000] uppercase text-xl font-bold">{picName}</p>
        <p className="whitespace-nowrap overflow-hidden w-fit relative ">
          <span id="desc" className="inline-block desc-hover:animate-typing text-lg text-[#3a3a3a] font-semibold ">
            {description}
          </span>
        </p>
        <div className="">
          <button onClick={handleClick} className="border text-[#252525] transition duration-500 hover:text-black px-2 py-1">
            Learn More
          </button>
        </div>

        </div>
      
    </div>
  );
};

export default ImgCard;
