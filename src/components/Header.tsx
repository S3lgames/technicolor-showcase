
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm', 
        isScrolled ? 'bg-cyber-black/70 py-3 shadow-md shadow-cyber-blue/20' : 'bg-transparent py-6'
      )}
    >
      <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#home" 
          className="font-orbitron text-2xl font-bold tracking-wider text-white"
        >
          <span className="text-cyber-blue">CYBER</span>
          <span className="text-cyber-green">DESIGN</span>
        </a>
        
        <div className="md:hidden">
          <button 
            className="p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-cyber-purple" />
            ) : (
              <Menu className="h-6 w-6 text-cyber-blue" />
            )}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-white opacity-80 hover:opacity-100 hover:text-cyber-blue transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyber-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <div 
          className={cn(
            'fixed inset-0 bg-cyber-black/95 backdrop-blur-md z-50 flex flex-col justify-center transition-all duration-300 md:hidden',
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          <button 
            className="absolute top-6 right-6 p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-6 w-6 text-cyber-red" />
          </button>
          
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-orbitron text-2xl text-white flex items-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ChevronRight className="h-5 w-5 mr-2 text-cyber-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyber-blue transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
