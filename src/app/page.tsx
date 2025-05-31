"use client";

import Link from "next/link";
import { useState, useEffect, useRef, ReactNode } from "react";

// Animation component for elements that fade in on scroll
interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
}

const FadeInOnScroll = ({ children, delay = 0 }: FadeInOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      }
    });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition duration-1000 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function Home() {
  // Add state for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Function to open modal
  const openModal = () => setIsModalOpen(true);
  
  // Function to close modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 px-6 sm:px-6">
        {/* Fondo de video o imagen */}
        <div className="absolute inset-0 bg-black">
          {/* Aquí puedes agregar un video o imagen de fondo */}
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-cyan-900/90"></div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-400/10 filter blur-3xl animate-pulse hidden sm:block"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400/10 filter blur-3xl animate-pulse hidden sm:block" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        {/* Contenido principal */}
        <div className="container mx-auto px-6 relative z-20 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 sm:px-6 py-1 sm:py-2 border border-cyan-400/30 rounded-full backdrop-blur-sm bg-cyan-600/10">
              <p className="text-xs sm:text-sm font-medium text-cyan-300">California&apos;s Premier Commercial Pool Specialists</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-1 sm:mb-2">Transforming Commercial</span>
              <span className="relative inline-block">
                <span className="relative z-10">Pool Spaces</span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full">
                  <svg viewBox="0 0 100 12" className="w-full overflow-visible">
                    <path 
                      d="M0,10 Q50,0 100,10" 
                      fill="none" 
                      stroke="url(#gradient)" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center">
              <button 
                onClick={openModal} 
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get a Free Quote
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <Link href="/services" className="group relative overflow-hidden bg-transparent border-2 border-white/30 backdrop-blur-sm hover:border-white/80 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
                <span className="relative z-10 flex items-center justify-center">
                  Explore Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2 opacity-50 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Separador inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-40 left-20 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 rounded-full bg-cyan-300/10 filter blur-3xl animate-pulse hidden sm:block"></div>
        <div className="absolute bottom-20 right-20 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 rounded-full bg-blue-400/10 filter blur-3xl animate-pulse hidden sm:block" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="p-0.5 sm:p-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
                <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <FadeInOnScroll>
                    <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-0.5 sm:py-1 bg-blue-50 border border-blue-100 rounded-full text-center sm:text-left">
                      <p className="text-xs sm:text-sm font-medium text-blue-600">California Certified Pool Contractors</p>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
                      About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">EverBlue Pool S&R</span>
                    </h2>
                  </FadeInOnScroll>
                  
                  <FadeInOnScroll delay={200}>
                    <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      With over 15 years of experience, EverBlue Pool S&R LLC has established itself as a leader in commercial pool construction throughout California. Our team of skilled professionals combines technical expertise with creative vision to deliver exceptional results for our clients.
                    </p>
                  </FadeInOnScroll>
                  
                  <FadeInOnScroll delay={300}>
                    <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                      We specialize in designing and building custom commercial pools for hotels, resorts, apartment complexes, and public facilities, with a focus on sustainability, innovation, and quality craftsmanship.
                    </p>
                  </FadeInOnScroll>
                  
                  <FadeInOnScroll delay={400}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                      <div className="flex items-start">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-3 sm:mr-4 shadow-md flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">15+ Years</p>
                          <p className="text-xs sm:text-sm text-gray-500">Industry Experience</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-3 sm:mr-4 shadow-md flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">200+ Projects</p>
                          <p className="text-xs sm:text-sm text-gray-500">Successfully Completed</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-3 sm:mr-4 shadow-md flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">Licensed & Insured</p>
                          <p className="text-xs sm:text-sm text-gray-500">For Your Protection</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-3 sm:mr-4 shadow-md flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">5-Star Service</p>
                          <p className="text-xs sm:text-sm text-gray-500">Client Satisfaction</p>
                        </div>
                      </div>
                    </div>
                  </FadeInOnScroll>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-1 lg:order-2">
              <FadeInOnScroll delay={300}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Marco con borde gradiente */}
                  <div className="p-0.5 sm:p-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    {/* Replace with your actual image */}
                    <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-lg sm:rounded-xl overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <p>About Image (480x640)</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Segundo marco para efecto 3D */}
                  <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-full h-full p-0.5 sm:p-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl sm:rounded-2xl -z-10 rotate-4 sm:rotate-6 hidden sm:block"></div>
                  
                  {/* Elemento decorativo */}
                  <div className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-xl hidden sm:block"></div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-40 right-5 sm:right-10 md:right-20 w-24 sm:w-32 md:w-48 lg:w-64 h-24 sm:h-32 md:h-48 lg:h-64 rounded-full bg-cyan-300/10 filter blur-3xl animate-pulse hidden sm:block"></div>
        <div className="absolute bottom-20 left-5 sm:left-10 md:left-20 w-32 sm:w-40 md:w-60 lg:w-80 h-32 sm:h-40 md:h-60 lg:h-80 rounded-full bg-blue-400/10 filter blur-3xl animate-pulse hidden sm:block" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeInOnScroll>
            <div className="text-center mb-8 sm:mb-10 md:mb-14">
              <div className="inline-block mb-2 sm:mb-3 md:mb-4 px-3 sm:px-4 py-0.5 sm:py-1 md:py-1.5 bg-blue-50 border border-blue-100 rounded-full">
                <p className="text-xs sm:text-sm font-medium text-blue-600">Professional Pool Services</p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-800">
                Our <span className="text-cyan-600">Services</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
                We offer a comprehensive range of commercial pool construction and renovation services tailored to your specific needs.
              </p>
            </div>
          </FadeInOnScroll>
          
          {/* Carrusel móvil / Grid en desktop */}
          <div className="relative overflow-visible">
            {/* Carrusel en móvil y tablet / Grid en desktop */}
            <div className="flex lg:grid lg:grid-cols-3 lg:gap-8 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar -mx-6 px-6 lg:px-0 lg:mx-0 lg:overflow-visible">
              {/* Service 1 */}
              <FadeInOnScroll delay={100}>
                <div className="group h-full flex-shrink-0 w-[85vw] max-w-sm lg:w-auto mx-2 lg:mx-0 first:ml-0 lg:overflow-visible last:mr-0">
                  <div className="p-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-lg md:rounded-xl lg:rounded-2xl shadow-md md:shadow-lg lg:shadow-xl h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 lg:group-hover:-translate-y-2 lg:hover:shadow-cyan-500/20">
                    <div className="bg-white rounded-lg md:rounded-xl overflow-hidden h-full flex flex-col">
                      <div className="p-0.5 m-2 sm:m-3 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-md sm:rounded-lg overflow-hidden">
                        <div className="h-36 sm:h-44 md:h-48 lg:h-56 bg-gray-200 rounded-md sm:rounded-lg relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs sm:text-sm">
                            <p>Service Image (400x300)</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex-grow flex flex-col">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 md:mb-3 text-gray-800">Commercial Pool Construction</h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">
                          From concept to completion, we design and build custom commercial pools for hotels, resorts, apartment complexes, and more.
                        </p>
                        <Link href="/services#construction" className="inline-flex items-center text-cyan-600 font-medium text-xs sm:text-sm md:text-base hover:text-cyan-700 transition duration-300 mt-auto">
                          <span className="border-b border-cyan-400/30 hover:border-cyan-500">Learn More</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
              
              {/* Service 2 */}
              <FadeInOnScroll delay={200}>
                <div className="group h-full flex-shrink-0 w-[85vw] max-w-sm lg:w-auto mx-2 lg:mx-0">
                  <div className="p-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-lg md:rounded-xl lg:rounded-2xl shadow-md md:shadow-lg lg:shadow-xl h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 lg:group-hover:-translate-y-2 lg:hover:shadow-cyan-500/20">
                    <div className="bg-white rounded-lg md:rounded-xl overflow-hidden h-full flex flex-col">
                      <div className="p-0.5 m-2 sm:m-3 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-md sm:rounded-lg overflow-hidden">
                        <div className="h-36 sm:h-44 md:h-48 lg:h-56 bg-gray-200 rounded-md sm:rounded-lg relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs sm:text-sm">
                            <p>Service Image (400x300)</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex-grow flex flex-col">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 md:mb-3 text-gray-800">Pool Renovation & Upgrades</h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">
                          Revitalize your existing commercial pool with our comprehensive renovation services, including new finishes, decking, and modern features.
                        </p>
                        <Link href="/services#renovation" className="inline-flex items-center text-cyan-600 font-medium text-xs sm:text-sm md:text-base hover:text-cyan-700 transition duration-300 mt-auto">
                          <span className="border-b border-cyan-400/30 hover:border-cyan-500">Learn More</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
              
              {/* Service 3 */}
              <FadeInOnScroll delay={300}>
                <div className="group h-full flex-shrink-0 w-[85vw] max-w-sm lg:w-auto mx-2 lg:mx-0 last:mr-0">
                  <div className="p-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-lg md:rounded-xl lg:rounded-2xl shadow-md md:shadow-lg lg:shadow-xl h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 lg:group-hover:-translate-y-2 lg:hover:shadow-cyan-500/20">
                    <div className="bg-white rounded-lg md:rounded-xl overflow-hidden h-full flex flex-col">
                      <div className="p-0.5 m-2 sm:m-3 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-md sm:rounded-lg overflow-hidden">
                        <div className="h-36 sm:h-44 md:h-48 lg:h-56 bg-gray-200 rounded-md sm:rounded-lg relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs sm:text-sm">
                            <p>Service Image (400x300)</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex-grow flex flex-col">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 md:mb-3 text-gray-800">Maintenance & Repair</h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">
                          Keep your commercial pool operating at peak performance with our regular maintenance services and prompt repair solutions.
                        </p>
                        <Link href="/services#maintenance" className="inline-flex items-center text-cyan-600 font-medium text-xs sm:text-sm md:text-base hover:text-cyan-700 transition duration-300 mt-auto">
                          <span className="border-b border-cyan-400/30 hover:border-cyan-500">Learn More</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>

            {/* Indicadores de scroll (puntos) */}
            <div className="flex justify-center mt-4 sm:hidden">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mx-1"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300 mx-1"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300 mx-1"></div>
            </div>
          </div>
          
          <FadeInOnScroll delay={400}>
            <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-14">
              <Link href="/services" className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
                View All Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Estilo para ocultar scrollbar pero mantener funcionalidad */}
        <style jsx global>{`
          .hide-scrollbar {
            -ms-overflow-style: none;  /* Internet Explorer y Edge */
            scrollbar-width: none;  /* Firefox */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;  /* Chrome, Safari y Opera */
          }
        `}</style>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Featured <span className="text-cyan-600">Projects</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of commercial pool projects showcasing our expertise, innovation, and quality craftsmanship.
              </p>
            </div>
          </FadeInOnScroll>
          
          {/* Carrusel móvil / Grid en desktop */}
          <div className="relative">
            <div className="flex lg:grid lg:grid-cols-3 lg:gap-8 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar -mx-6 px-6 lg:px-0 lg:mx-0">
              {/* Project 1 */}
              <FadeInOnScroll delay={100}>
                <div className="group h-full flex-shrink-0 w-[85vw] max-w-sm lg:w-auto mx-2 lg:mx-0 first:ml-0 lg:overflow-visible last:mr-0">
                  <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
                    <div className="h-full bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <p>Project Image (400x300)</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold text-white mb-2">Luxury Hotel Infinity Pool</h3>
                      <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        A stunning infinity-edge pool overlooking the Pacific Ocean for a 5-star hotel in Malibu.
                      </p>
                      <Link href="/projects/luxury-hotel" className="text-cyan-400 font-medium flex items-center hover:text-cyan-300 transition duration-300 opacity-0 group-hover:opacity-100">
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
              
              {/* Project 2 */}
              <FadeInOnScroll delay={200}>
                <div className="group h-full flex-shrink-0 w-[85vw] max-w-sm lg:w-auto mx-2 lg:mx-0">
                  <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
                    <div className="h-full bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <p>Project Image (400x300)</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold text-white mb-2">Resort Water Park</h3>
                      <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        A multi-feature water park with slides, splash pads, and a wave pool for a family resort in San Diego.
                      </p>
                      <Link href="/projects/resort-waterpark" className="text-cyan-400 font-medium flex items-center hover:text-cyan-300 transition duration-300 opacity-0 group-hover:opacity-100">
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
              
              {/* Project 3 */}
              <FadeInOnScroll delay={300}>
                <div className="group h-full flex-shrink-0 w-[85vw] max-w-sm lg:w-auto mx-2 lg:mx-0 last:mr-0">
                  <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
                    <div className="h-full bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <p>Project Image (400x300)</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold text-white mb-2">Community Aquatic Center</h3>
                      <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        A state-of-the-art community pool complex with Olympic-sized lap pool, diving boards, and recreation areas.
                      </p>
                      <Link href="/projects/aquatic-center" className="text-cyan-400 font-medium flex items-center hover:text-cyan-300 transition duration-300 opacity-0 group-hover:opacity-100">
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
          
          <FadeInOnScroll delay={400}>
            <div className="text-center mt-12">
              <Link href="/projects" className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
                View All Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-40 left-20 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 rounded-full bg-cyan-300/10 filter blur-3xl animate-pulse hidden sm:block"></div>
        <div className="absolute bottom-20 right-20 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 rounded-full bg-blue-400/10 filter blur-3xl animate-pulse hidden sm:block" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Client <span className="text-cyan-600">Testimonials</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our clients say about our work and dedication to excellence.
              </p>
            </div>
          </FadeInOnScroll>
          
          {/* Carrusel móvil / Grid en desktop */}
          <div className="relative overflow-visible">
            <div className="flex lg:grid lg:grid-cols-3 lg:gap-8 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 lg:overflow-visible">
              {/* Testimonial 1 */}
              <FadeInOnScroll delay={100}>
                <div className="group h-full flex-shrink-0 w-[85vw] max-w-sm lg:w-auto mx-2 lg:mx-0 first:ml-0 lg:overflow-visible lg:overflow-visible">
                  <div className="bg-white p-8 rounded-lg shadow-lg relative h-full">
                    {/* Quote icon */}
                    <div className="absolute top-2 right-4 text-cyan-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    <div className="mb-6">
                      {/* 5 stars */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 01-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      <p className="text-gray-600 italic mb-4">
                        &quot;EverBlue transformed our outdated hotel pool into a stunning centerpiece that has become the highlight of our property. Their attention to detail and commitment to quality is unmatched.&quot;
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                        {/* Replace with actual client image */}
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">Photo</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Michael Rodriguez</h4>
                        <p className="text-gray-500 text-sm">General Manager, Oceanview Resort</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
              
              {/* Testimonial 2 */}
              <FadeInOnScroll delay={200}>
                <div className="group h-full flex-shrink-0 w-[85vw] max-w-sm lg:w-auto mx-2 lg:mx-0">
                  <div className="bg-white p-8 rounded-lg shadow-lg relative h-full">
                    {/* Quote icon */}
                    <div className="absolute top-2 right-4 text-cyan-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    <div className="mb-6">
                      {/* 5 stars */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 01-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      <p className="text-gray-600 italic mb-4">
                        &quot;Working with EverBlue on our apartment complex pool renovation was a seamless experience. They stayed on budget, finished ahead of schedule, and delivered exactly what we envisioned.&quot;
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                        {/* Replace with actual client image */}
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">Photo</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Jennifer Martinez</h4>
                        <p className="text-gray-500 text-sm">Property Manager, The Heights Apartments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
              
              {/* Testimonial 3 */}
              <FadeInOnScroll delay={300}>
                <div className="group h-full flex-shrink-0 w-[85vw] max-w-sm lg:w-auto mx-2 lg:mx-0 last:mr-0">
                  <div className="bg-white p-8 rounded-lg shadow-lg relative h-full">
                    {/* Quote icon */}
                    <div className="absolute top-2 right-4 text-cyan-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    <div className="mb-6">
                      {/* 5 stars */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 01-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      <p className="text-gray-600 italic mb-4">
                        &quot;As a city facilities manager, I&apos;ve worked with many contractors over the years. EverBlue stands out for their expertise, professionalism, and ability to deliver exceptional results on our community aquatic center.&quot;
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                        {/* Replace with actual client image */}
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">Photo</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">David Thompson</h4>
                        <p className="text-gray-500 text-sm">Facilities Director, City of San Rafael</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <FadeInOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your <span className="text-cyan-300">Commercial Pool</span>?
                </h2>
              </FadeInOnScroll>
              
              <FadeInOnScroll delay={200}>
                <p className="text-lg text-blue-100 mb-8 max-w-xl">
                  Contact us today for a free consultation and quote. Our team of experts is ready to bring your vision to life with innovative design and exceptional craftsmanship.
                </p>
              </FadeInOnScroll>
              
              <FadeInOnScroll delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={openModal} 
                    className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-6 rounded-md transition duration-300 text-center"
                  >
                    Contact Us
                  </button>
                  <Link href="tel:+14155559876" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold py-3 px-6 rounded-md transition duration-300 text-center flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    (415) 555-9876
                  </Link>
                </div>
              </FadeInOnScroll>
            </div>
            
            <div className="hidden lg:block lg:w-1/2 lg:pl-12">
              <FadeInOnScroll delay={400}>
                <div className="p-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
                  <div className="bg-white rounded-lg sm:rounded-xl p-8 text-gray-800">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">Request a Free Quote</h3>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="first_name" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            First Name
                          </label>
                          <input type="text" id="first_name" name="first_name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                        </div>
                        
                        <div>
                          <label htmlFor="last_name" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Last Name
                          </label>
                          <input type="text" id="last_name" name="last_name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Email Address
                        </label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Phone Number
                        </label>
                        <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                      </div>
                      
                      <div>
                        <label htmlFor="project_type" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          Project Type
                        </label>
                        <div className="select-wrapper">
                          <select id="project_type" name="project_type" defaultValue="" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white select-fix custom-select">
                            <option value="" disabled>Select Project Type</option>
                            <option value="new_construction">New Pool Construction</option>
                            <option value="renovation">Pool Renovation</option>
                            <option value="maintenance">Maintenance & Repair</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                          Project Details
                        </label>
                        <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"></textarea>
                      </div>
                      
                      <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        Submit Request
                      </button>
                    </form>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-xl shadow-2xl max-w-md md:max-w-lg w-full animate-fade-scale-in">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Request a Free Quote</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="modal_first_name" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      First Name
                    </label>
                    <input type="text" id="modal_first_name" name="first_name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                  </div>
                  
                  <div>
                    <label htmlFor="modal_last_name" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Last Name
                    </label>
                    <input type="text" id="modal_last_name" name="last_name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="modal_email" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Address
                  </label>
                  <input type="email" id="modal_email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                
                <div>
                  <label htmlFor="modal_phone" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Phone Number
                  </label>
                  <input type="tel" id="modal_phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                
                <div>
                  <label htmlFor="modal_project_type" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Project Type
                  </label>
                  <div className="select-wrapper">
                    <select id="modal_project_type" name="project_type" defaultValue="" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white modal-select-fix custom-select">
                      <option value="" disabled>Select Project Type</option>
                      <option value="new_construction">New Pool Construction</option>
                      <option value="renovation">Pool Renovation</option>
                      <option value="maintenance">Maintenance & Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="modal_message" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    Project Details
                  </label>
                  <textarea id="modal_message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
