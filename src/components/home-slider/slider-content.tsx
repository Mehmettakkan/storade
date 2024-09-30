// components/HomeSlider/SliderContent.tsx
import React from "react";

const SliderContent: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:w-1/2 mb-8 md:mb-0 md:pr-8">
      <h2 className="text-xs font-bold tracking-[10px] sm:tracking-[14px] text-left opacity-100 mb-[10px]">
        #SALESCHANNELS
      </h2>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-none text-left">
        Satış kanalları ile <br />
        <span className="font-normal">
          dilediğiniz yerde satış <br />
          yapın.
        </span>
      </h1>
      <p className="text-base sm:text-lg font-normal text-left text-gray-600 mt-4 sm:mt-[30px] break-words sm:whitespace-normal">
        Arcu interdum dolor mattis sapien, justo fringilla. In pellentesque
        convallis orci adipiscing erat facilisi pellentesque duis tellus. Sagittis blandit
        euismod euismod urna, tincidunt ut egestas.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center mt-6 sm:mt-[30px]">
        <button className="w-full sm:w-[157px] h-[54px] flex items-center justify-center px-4 sm:px-[30px] py-[18px] rounded-[50px] bg-[#3751DD] text-white text-sm font-bold leading-[16.94px] whitespace-nowrap hover:bg-[#2c3eb5] transition duration-300">
          GET STARTED
        </button>
        <button className="w-full sm:w-auto text-black px-4 py-3 rounded-full text-sm font-bold leading-[16.94px] hover:underline transition duration-300 flex items-center justify-center sm:justify-start whitespace-normal sm:whitespace-nowrap">
          <span className="mr-2">Start a conversation with the sales team</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SliderContent;