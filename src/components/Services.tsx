import React from 'react';
import {Search, MousePointer, Share2, Mail, FileText, BarChart3, ArrowRight } from 'lucide-react';

import analytics from '../assets/analytics.svg';
import messages from '../assets/messages.svg';
import navigate from '../assets/navigate.svg';
import rate from '../assets/rate.svg';
import search from '../assets/search.svg';
import windows from '../assets/windows.svg';

const Services = () => {
  const services = [
    {
      title: 'Search engine optimization',
      description: 'Learn more',
      icon: Search,
      bgColor: 'bg-brand-light',
      textColor: 'text-brand-dark',
      iconColor: 'text-brand-dark',
      image: search,
      animationDelay: '0.15s',
      bgArrowColor: 'bg-brand-dark',
      textArrowColor: 'text-brand-dark',
      iconArrowColor: 'text-brand-green',
      hoverBgColor: 'bg-brand-green',
      hoverTextColor: 'text-brand-dark',
      hoverIconColor: 'text-brand-dark',
      textBgColor: 'bg-brand-green',
      descriptionColor: 'text-brand-dark',
    },
    {
      title: 'Pay-per-click advertising',
      description: 'Learn more',
      icon: MousePointer,
      bgColor: 'bg-brand-green',
      textColor: 'text-brand-dark',
      iconColor: 'text-brand-dark',
      image: navigate,
      animationDelay: '0.3s',
      bgArrowColor: 'bg-black',
      textArrowColor: 'text-white',
      iconArrowColor: 'text-brand-green',
      hoverBgColor: 'bg-black',
      hoverTextColor: 'text-white',
      hoverIconColor: 'text-brand-green',
      textBgColor: 'bg-brand-light',
      descriptionColor: 'text-brand-dark',
    },
    {
      title: 'Social Media Marketing',
      description: 'Learn more',
      icon: Share2,
      bgColor: 'bg-brand-dark',
      textColor: 'text-brand-dark',
      iconColor: 'text-brand-green',
      image: rate,
      animationDelay: '0.45s',
      bgArrowColor: 'bg-brand-light',
      textArrowColor: 'text-brand-dark',
      iconArrowColor: 'text-brand-dark',
      hoverBgColor: 'bg-brand-light',
      hoverTextColor: 'text-brand-dark',
      hoverIconColor: 'text-brand-dark',
      textBgColor: 'bg-brand-light',
      descriptionColor: 'text-brand-light',
    },
    {
      title: 'Email Marketing',
      description: 'Learn more',
      icon: Mail,
      bgColor: 'bg-brand-light',
      textColor: 'text-brand-dark',
      iconColor: 'text-brand-dark',
      image: messages,
      animationDelay: '0.6s',
      bgArrowColor: 'bg-brand-dark',
      textArrowColor: 'text-brand-dark',
      iconArrowColor: 'text-brand-green',
      hoverBgColor: 'bg-brand-green',
      hoverTextColor: 'text-brand-dark',
      hoverIconColor: 'text-brand-dark',
      textBgColor: 'bg-brand-green',
      descriptionColor: 'text-brand-dark',
    },
    {
      title: 'Content Creation',
      description: 'Learn more',
      icon: FileText,
      bgColor: 'bg-brand-green',
      textColor: 'text-brand-dark',
      iconColor: 'text-brand-dark',
      image: windows,
      animationDelay: '0.75s',
      bgArrowColor: 'bg-brand-dark',
      textArrowColor: 'text-white',
      iconArrowColor: 'text-brand-green',
      hoverBgColor: 'bg-brand-dark',
      hoverTextColor: 'text-white',
      hoverIconColor: 'text-brand-green',
      textBgColor: 'bg-brand-light',
      descriptionColor: 'text-brand-dark',
    },
    {
      title: 'Analytics and Tracking',
      description: 'Learn more',
      icon: BarChart3,
      bgColor: 'bg-brand-dark',
      textColor: 'text-brand-dark',
      iconColor: 'text-brand-green',
      image: analytics,
      animationDelay: '0.9s',
      bgArrowColor: 'bg-brand-light',
      textArrowColor: 'text-brand-dark',
      iconArrowColor: 'text-brand-dark',
      hoverBgColor: 'bg-brand-light',
      hoverTextColor: 'text-brand-dark',
      hoverIconColor: 'text-brand-dark',
      textBgColor: 'bg-brand-green',
      descriptionColor: 'text-brand-light',
    }
  ];

  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-block bg-brand-green px-4 py-2 rounded-lg animate-bounce-in">
            <h2 className="text-h4-mobile lg:text-h4-desktop text-brand-dark font-medium">
              Services
            </h2>
          </div>
          <p className="text-p-mobile lg:text-p-desktop text-brand-dark mt-4 max-w-2xl animate-fade-in-delayed">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div className={`service-card ${service.bgColor} ${service.textColor} animate-slide-up group overflow-hidden relative
              shadow-lg rounded-3xl border-b-4 border-r-4 border-brand-dark p-3  md:p-8
            `}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Image */}
            <div className="md:absolute md:top-0 md:right-0 md:bottom-0 md:w-[250px] md:h-full flex justify-center items-center p-3 md:p-8 z-10 overflow-hidden rounded-tl-3xl">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-38 xs:w-32 md:w-full h-auto object-contain md:object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text content */}
            <div className="relative flex flex-col md:justify-between md:h-full md:p-4 md:pr-[270px]"> 
              <div className="flex items-center justify-between my-3 md:mb-8">
                <h3 className={`text-h3-mobile lg:text-h3-desktop font-medium max-w-xs group-hover:scale-105 transition-transform duration-300 ${service.textColor}`}>
                  <span className={`${service.textBgColor} px-1`}>
                    {service.title}
                  </span>
                </h3>
              </div>

              {/* Learn more button */}
              <div className="flex items-center group cursor-pointer">
                <div className={`w-[50px] h-[50px] rounded-full flex
                  transition-all duration-500 justify-center items-center hover:-rotate-45
                  ${service.bgArrowColor} ${service.textArrowColor} ${service.iconArrowColor}
                  group-hover:shadow-lg mr-2
                `}>
                  <ArrowRight className={`w-6 h-6 ${service.iconArrowColor} transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110`} />
                </div>
                <span className={`text-p-mobile lg:text-p-desktop font-medium group-hover:underline transition-all duration-300 ${service.descriptionColor}`}>
                  {service.description}
                </span>
              </div>
            </div>
          </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;