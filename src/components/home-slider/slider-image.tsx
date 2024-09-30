import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SliderImage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-[700px] h-[590px]">
      {/* Green L-shaped frame with fade-in and scale-up animation */}
      <div
        className={`absolute top-0 left-0 w-[257px] h-[590px] transition-all duration-1000 ease-in-out transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        <Image
          src="/images/Green-L-shaped-frame.svg"
          alt="Green L-shaped frame"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* White content area with fade-in and scale-up animation */}
      <div
        className={`absolute top-[76px] left-[127px] w-[252px] h-[438px] transition-all duration-1000 ease-in-out delay-200 transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        <Image
          src="/images/White-content-area.svg"
          alt="White content area"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Blue plus button with hover animation and initial fade-in */}
      <div
        className={`absolute top-[254px] left-[338px] w-[82px] h-[82px] bg-blue-600 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out delay-400 transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        } hover:scale-110`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>

      {/* Social media icons with fade-in and scale-up animation */}
      <div
        className={`absolute top-[86px] left-[440px] w-[194px] h-[418px] transition-all duration-1000 ease-in-out delay-600 transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        <Image
          src="/images/Social-media-icons.svg"
          alt="Social media icons"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default SliderImage;