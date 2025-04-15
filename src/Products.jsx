import React from "react";
import SearchTabs from "./components/SearchTabs";
import { RiSearch2Line } from "react-icons/ri";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/contact");
    }
  const [searchTerm, setSearchTerm] = useState("");
const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
useEffect(() => {
  const handler = setTimeout(() => {
    setDebouncedSearchTerm(searchTerm);
  }, 500); // Delay in milliseconds (500ms is good)

  return () => {
    clearTimeout(handler); // Cleanup if the user keeps typing
  };
}, [searchTerm]);


  console.log(searchTerm);
  return (
    <>
      <main>
        <section className="mt-[10vh] px-10 py-10">
          <h5 className="text-center text-4xl font-bold italic">
            Delivering Excellence, One Product at a Time. <br />
            -Anand
          </h5>
          <div className="py-10">
            <div className="my-5 flex justify-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=" border bg-gray-400 rounded-lg px-10 py-2 w-[600px] text-xl focus:outline-none"
                />
                <p className="absolute  top-1/2 left-[20px] transform -translate-x-1/2 -translate-y-1/2 ">
                  <RiSearch2Line   />
                </p>
              </div>
            </div>
            <div>
              <SearchTabs  debouncedSearchTerm={debouncedSearchTerm}/>
            </div>
          </div>
        </section>
        <section className="py-10 flex gap-4 justify-center">
          <div className="flex flex-col gap-4">
          <h5 className="text-center text-xl font-bold">Didn't find your things ?</h5>
          <p className="text-center">Contact Us to find your requirements.</p>
          <div className="flex justify-center">
          <div className="mt-4 group/button flex w-30">
          <button onClick={handleClick} className="relative px-2 py-1 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-[#080808] text-lg overflow-hidden transition-colors duration-500 hover:text-white group/button font-bold">
            Contact Us
            <span className="absolute inset-0 transition-opacity duration-600 group-hover/button:opacity-0"></span>
            <span className="absolute top-1/2 left-1/2 w-30 h-30 -translate-x-1/2 -translate-y-1/2 bg-[#CC2936] shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 -z-10 group-hover/button:scale-100 group-hover/button:opacity-100 transition-all duration-600 ease-out"></span>
          </button>
        </div>
          </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
