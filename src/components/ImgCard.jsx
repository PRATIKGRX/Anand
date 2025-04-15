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
        <div className="mt-4 group/button">
          <button onClick={handleClick} className="relative px-2 py-1 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-[#080808] text-lg overflow-hidden transition-colors duration-500 hover:text-white group/button font-bold">
            Learn More
            <span className="absolute inset-0 transition-opacity duration-600 group-hover/button:opacity-0"></span>
            <span className="absolute top-1/2 left-1/2 w-30 h-30 -translate-x-1/2 -translate-y-1/2 bg-[#CC2936] shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 -z-10 group-hover/button:scale-100 group-hover/button:opacity-100 transition-all duration-600 ease-out"></span>
          </button>
        </div>

        </div>
      
    </div>
  );
};

export default ImgCard;
