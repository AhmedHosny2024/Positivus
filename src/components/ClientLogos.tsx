import React from 'react';
import amazon from '../assets/amazon.svg';
import dribbble from '../assets/dribbble.svg';
import hubspot from '../assets/hubspot.svg';
import notion from '../assets/notion.svg';
import netflix from '../assets/netflix.svg';
import zoom from '../assets/zoom.svg';  

const ClientLogos = () => {
  const clients = [
    { name: 'Amazon', logo: amazon },
    { name: 'Dribbble', logo: dribbble },
    { name: 'HubSpot', logo: hubspot },
    { name: 'Notion', logo: notion },
    { name: 'Netflix', logo: netflix },
    { name: 'Zoom', logo: zoom },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="flex animate-slide-infinite">
            {duplicatedClients.map((client, index) => (
              <div 
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-48 mx-8 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer transform hover:scale-110"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
          
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;