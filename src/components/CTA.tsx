import React from 'react';
import stars from '../assets/stars.svg';

const CTA = () => {
  return (
    <section className="bg-brand-light m-6 sm:m-10 md:m-24 px-4 sm:px-6 md:px-[60px] py-5 border rounded-[45px] relative">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center relative">
      <div className="animate-fade-in-up">
        <h2 className="text-h2-mobile lg:text-h2-desktop text-brand-dark mb-6">
          Let's make things happen
        </h2>
        <p className="text-p-mobile lg:text-p-desktop text-brand-dark mb-8 max-w-lg animate-fade-in-delayed">
          Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
        </p>
        <button className="btn-primary group animate-bounce-in-delayed rounded-xl">
          Get your free proposal
          <div className="ml-2 w-5 h-5 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <div className="w-2 h-2 bg-brand-dark rounded-full"></div>
          </div>
        </button>
      </div>
      <img 
        src={stars} 
        alt="Stars background" 
        className="absolute right-20 object-cover animate-slide-up transform hover:scale-105 transition-transform duration-200 hidden md:block"
      />
      <img
        src={stars}
        alt="Stars background"
        className="block md:hidden absolute bottom-full right-[-25px] mb-[-40px] w-32 object-contain animate-fade-in"
      />

    </div>
  </div>
</section>

  );
};

export default CTA;
