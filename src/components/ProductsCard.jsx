import React, { useState, useEffect } from "react";

const ProductCard = ({ pic, picName, description, additiondescription }) => {
  // State to manage if the modal is open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Control body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      // Disable scrolling on the body
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  // Toggle the modal state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative w-full">
      <div className="w-full h-[300px] relative group flex justify-center overflow-hidden rounded-lg">
        <img src={pic} className="object-cover object-center w-full h-full" />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/40 backdrop-blur-sm desc">
          <p className="text-[#000000] uppercase text-xl font-bold">
            {picName}
          </p>
          <p className="whitespace-nowrap overflow-hidden w-fit relative">
            <span
              id="desc"
              className="inline-block desc-hover:animate-typing text-lg text-[#3a3a3a] font-semibold"
            >
              {description}
            </span>
          </p>
          <div className="mt-4 group/button">
            <button
              onClick={toggleModal}
              className="relative px-2 py-1 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-[#080808] text-lg overflow-hidden transition-colors duration-500 hover:text-white group/button font-bold"
            >
              Learn More
              <span className="absolute inset-0 transition-opacity duration-600 group-hover/button:opacity-0"></span>
              <span className="absolute top-1/2 left-1/2 w-30 h-30 -translate-x-1/2 -translate-y-1/2 bg-[#CC2936] shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 -z-10 group-hover/button:scale-100 group-hover/button:opacity-100 transition-all duration-600 ease-out"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#B7B7B7]/20 bg-opacity-60 backdrop-blur-sm"
          onClick={toggleModal}
        >
          {/* Modal Content */}
          <div
            className="bg-white/80 rounded-lg overflow-hidden w-11/12 md:w-4/5 lg:w-3/5 max-h-5/6 transform transition-all duration-300 ease-in-out"
            style={{
              animation: "0.3s ease-out 0s 1 scaleIn forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <img
                  src={pic}
                  alt={picName}
                  className="w-full h-64 md:h-full object-cover object-center"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-6 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {picName}
                  </h2>
                  <button
                    onClick={toggleModal}
                    className="text-gray-500 hover:text-red-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="overflow-y-auto flex-grow">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-gray-700">{description}</p>
                  </div>

                  {additiondescription && (
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">
                        Additional Information
                      </h3>
                      <p className="text-gray-700">{additiondescription}</p>
                    </div>
                  )}
                </div>

                <div className="mt-4 w-18 flex group/button">
                  <button
                    onClick={toggleModal}
                    className="relative px-2 py-1 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-[#080808] text-lg overflow-hidden transition-colors duration-500 hover:text-white group/button font-bold"
                  >
                    Close
                    <span className="absolute inset-0 transition-opacity duration-600 group-hover/button:opacity-0"></span>
                    <span className="absolute top-1/2 left-1/2 w-18 h-30 -translate-x-1/2 -translate-y-1/2 bg-[#CC2936] shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 -z-10 group-hover/button:scale-100 group-hover/button:opacity-100 transition-all duration-600 ease-out flex"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
