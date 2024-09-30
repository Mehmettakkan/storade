import React from 'react';
import SliderContent from './slider-content';
import SliderImage from './slider-image';

const HomeSlider: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-16">
        <SliderContent />
        <SliderImage />
      </div>
    </section>
  );
};

export default HomeSlider;
