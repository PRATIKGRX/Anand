import React from "react";
import SearchTabs from "./components/SearchTabs";
import { RiSearch2Line } from "react-icons/ri";
import { useState,useEffect } from "react";
const Products = () => {

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
      </main>
    </>
  );
};

export default Products;
