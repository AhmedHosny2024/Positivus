import React from 'react';
import { Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-brand-green rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-brand-green rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-dashed border-white rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Contact */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6 group cursor-pointer">
              <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                <div className="w-4 h-4 bg-brand-dark rounded-sm animate-pulse-gentle"></div>
              </div>
              <span className="text-h4-desktop font-medium group-hover:text-brand-green transition-colors duration-300">Positivus</span>
            </div>
            
            <div className="bg-brand-green inline-block px-4 py-2 rounded-lg mb-6 animate-bounce-in">
              <span className="text-brand-dark font-medium">Contact us:</span>
            </div>
            
            <div className="space-y-3 animate-fade-in-delayed">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-brand-green group-hover:scale-110 transition-transform duration-300" />
                <p className="text-p-desktop group-hover:text-brand-green transition-colors duration-300">info@positivus.com</p>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-brand-green group-hover:scale-110 transition-transform duration-300" />
                <p className="text-p-desktop group-hover:text-brand-green transition-colors duration-300">555-567-8901</p>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-brand-green group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-p-desktop group-hover:text-brand-green transition-colors duration-300">1234 Main St</p>
                  <p className="text-p-desktop group-hover:text-brand-green transition-colors duration-300">Moonstone City, Stardust State 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <nav className="space-y-4">
                {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map((item, index) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="block text-p-desktop hover:text-brand-green transition-all duration-300 transform hover:translate-x-2 relative group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                    <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-4 transform -translate-y-1/2"></span>
                  </a>
                ))}
              </nav>
            </div>
            
            <div className="flex flex-col items-start space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: '#' },
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-brand-green transition-all duration-300 transform hover:scale-110 hover:rotate-12 group animate-bounce-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <social.icon className="w-6 h-6 text-brand-dark group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-12 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1 relative group">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 rounded-lg bg-white text-brand-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all duration-300 group-hover:shadow-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-green to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <button className="btn-secondary group">
              Subscribe to news
              <div className="ml-2 w-5 h-5 bg-brand-dark rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-p-desktop">© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="text-p-desktop hover:text-brand-green transition-all duration-300 underline hover:no-underline relative group">
            Privacy Policy
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;