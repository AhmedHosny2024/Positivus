import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg backdrop-blur-sm bg-white/95' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in group cursor-pointer">
            <div className="w-8 h-8 bg-brand-dark rounded-lg flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
              <div className="w-4 h-4 bg-brand-green rounded-sm animate-pulse-gentle"></div>
            </div>
            <span className="text-h4-desktop lg:text-h3-desktop font-medium text-brand-dark group-hover:text-brand-green transition-colors duration-300">
              Positivus
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-p-desktop text-brand-dark hover:text-brand-green transition-all duration-300 relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block animate-fade-in-delayed">
            <button className="border-2 border-brand-dark text-brand-dark px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-brand-dark hover:text-white hover:scale-105 active:scale-95 group">
              Request a quote
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-brand-dark hover:text-brand-green transition-colors duration-300 transform hover:scale-110"
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 py-4 border-t border-gray-100' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-4">
            {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-p-mobile text-brand-dark hover:text-brand-green transition-all duration-300 transform hover:translate-x-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="border-2 border-brand-dark text-brand-dark px-6 py-3 rounded-lg font-medium mt-4 w-full hover:bg-brand-dark hover:text-white transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Request a quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;