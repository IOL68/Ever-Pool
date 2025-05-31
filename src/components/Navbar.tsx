"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactModal from './ContactModal';

// Definición de animaciones para el menú
const menuAnimations = `
  .menu-enter {
    animation: fadeIn 0.3s ease-in-out forwards;
  }
  
  .menu-exit {
    animation: fadeOut 0.3s ease-in-out forwards;
  }
`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState('');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Controla la animación y visibilidad del menú
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMenuVisible(true);
      setMenuAnimation('menu-enter');
    } else if (isMenuVisible) {
      setMenuAnimation('menu-exit');
      const timer = setTimeout(() => {
        setIsMenuVisible(false);
      }, 300); // Duración de la animación
      return () => clearTimeout(timer);
    }
  }, [isMobileMenuOpen, isMenuVisible]);

  // Función para abrir/cerrar el menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style jsx global>{menuAnimations}</style>
      <div className="fixed w-full z-50 flex justify-center px-4 pt-4">
        <div className={`relative ${isScrolled ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400' : 'bg-white/10'} w-full max-w-7xl shadow-lg overflow-hidden rounded-lg md:rounded-full p-[1px]`}>
          <nav className={`w-full h-full transition-all duration-500 ${isScrolled ? 'py-2 backdrop-blur-lg bg-[#071330]/80' : 'py-3 bg-white/5 backdrop-blur-sm'} rounded-lg md:rounded-full`}>
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                  {isScrolled ? (
                    <div className="flex items-center">
                      <div className="hidden md:block mr-12">
                        <Image
                          src="/logo.png"
                          alt="EverBlue Pool Logo"
                          width={90}
                          height={54}
                          className="object-contain drop-shadow-xl"
                          priority
                        />
                      </div>
                      <div className="flex items-center md:hidden">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">EverBlue</span>
                        <span className="ml-1 text-white/90">Pool</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <div className="hidden md:block mr-12">
                        <Image
                          src="/logo.png"
                          alt="EverBlue Pool Logo"
                          width={90}
                          height={54}
                          className="object-contain drop-shadow-xl"
                          priority
                        />
                      </div>
                      <div className="flex items-center md:hidden">
                        <span className="text-2xl font-bold text-white">EverBlue</span>
                        <span className="ml-1 text-white/90">Pool</span>
                      </div>
                    </div>
                  )}
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                  <Link 
                    href="/" 
                    className={`relative px-4 py-2 font-medium group text-white hover:text-cyan-100`}
                  >
                    <span className="relative z-10">Home</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Link>
                  <Link 
                    href="/about-us" 
                    className={`relative px-4 py-2 font-medium group text-white hover:text-cyan-100`}
                  >
                    <span className="relative z-10">About</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Link>
                  <Link 
                    href="/services" 
                    className={`relative px-4 py-2 font-medium group text-white hover:text-cyan-100`}
                  >
                    <span className="relative z-10">Services</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Link>
                  <Link 
                    href="/projects" 
                    className={`relative px-4 py-2 font-medium group text-white hover:text-cyan-100`}
                  >
                    <span className="relative z-10">Projects</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Link>
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className={`${isScrolled ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'} px-6 py-2 rounded-full transition-all duration-300`}
                  >
                    Contact Us
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button 
                    onClick={toggleMobileMenu}
                    className="text-white focus:outline-none"
                  >
                    {isMobileMenuOpen ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Mobile Menu */}
              {isMenuVisible && (
                <div 
                  ref={menuRef}
                  className={`md:hidden mt-4 pb-4 ${menuAnimation}`}
                >
                  <div className="flex flex-col space-y-0 backdrop-blur-xl bg-blue-900/85 rounded-lg border border-white/10 shadow-xl overflow-hidden">
                    <Link 
                      href="/" 
                      className="px-5 py-3.5 text-white hover:bg-white/10 font-medium transition-colors flex items-center border-b border-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3 opacity-70"></span>
                      Home
                    </Link>
                    <Link 
                      href="/about-us" 
                      className="px-5 py-3.5 text-white hover:bg-white/10 font-medium transition-colors flex items-center border-b border-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3 opacity-70"></span>
                      About
                    </Link>
                    <Link 
                      href="/services" 
                      className="px-5 py-3.5 text-white hover:bg-white/10 font-medium transition-colors flex items-center border-b border-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3 opacity-70"></span>
                      Services
                    </Link>
                    <Link 
                      href="/projects" 
                      className="px-5 py-3.5 text-white hover:bg-white/10 font-medium transition-colors flex items-center border-b border-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3 opacity-70"></span>
                      Projects
                    </Link>
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className={`${isScrolled ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'} px-6 py-2 rounded-full transition-all duration-300`}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onCloseAction={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
