import React from 'react';
import { ArrowRight } from 'lucide-react';
import banner from '../assets/banner.svg';

const Hero = () => {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-h1-mobile lg:text-h1-desktop text-brand-dark mb-6">
              Navigating the{' '}
              <span className="relative inline-block">
                digital landscape
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-brand-green opacity-30 rounded-lg animate-highlight-expand"></div>
              </span>{' '}
              for success
            </h1>
            
            <p className="text-p-mobile lg:text-p-desktop text-brand-dark mb-8 max-w-lg animate-fade-in-delayed">
              Our digital marketing agency helps businesses grow and succeed online through a range of 
              services including SEO, PPC, social media marketing, and content creation.
            </p>
            
            <button className="btn-primary group animate-bounce-in-delayed">
              Book a consultation
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
            </button>
          </div>

          {/* Right Banner Image */}
          <div className="hidden lg:block relative animate-slide-in">
            <img 
              src={banner}
              alt="Digital marketing banner"
              className="w-full h-auto  transform hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;