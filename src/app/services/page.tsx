"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Services() {
  // Estados para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  // Funciones para controlar el modal
  const openModal = () => {
    setIsClosing(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 bg-gradient-to-r from-blue-900 to-cyan-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center"><h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Pool Services</h1><p className="text-lg text-cyan-100 max-w-4xl mx-auto">Professional pool services tailored to your commercial needs. Excellence in every detail.</p></div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: New Pool Construction */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-75 group-hover:scale-110 transition-transform duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">New Pool Construction</h3>
                <p className="text-gray-600 mb-4">
                  Custom commercial pool design and construction with state-of-the-art technology and premium materials.
                </p>
                <Link href="/contact" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-200">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 2: Pool Renovation */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-75 group-hover:scale-110 transition-transform duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Pool Renovation</h3>
                <p className="text-gray-600 mb-4">
                  Transform your existing pool with modern features, improved efficiency, and updated aesthetics.
                </p>
                <Link href="/contact" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-200">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 3: Maintenance & Repair */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-75 group-hover:scale-110 transition-transform duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Maintenance & Repair</h3>
                <p className="text-gray-600 mb-4">
                  Regular maintenance and prompt repairs to keep your pool operating at peak performance.
                </p>
                <Link href="/contact" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-200">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your commercial pool project needs.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-6 rounded-md transition duration-300 group">
              Contact Us
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* Modal */}
      {isModalOpen && (
        // El div principal del modal
        <div className={`fixed inset-0 z-50 overflow-y-auto ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
          <div className="fixed inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-md transition-all duration-300"></div>
          
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className={`relative transform overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl text-left align-middle shadow-2xl transition-all w-full max-w-lg ${isClosing ? 'animate-slideOut' : 'animate-slideIn'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl -z-10"></div>
              {/* Modal header */}
              <div className="bg-white/80 backdrop-blur-md px-6 py-4 border-b border-gray-200/50">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Request a Free Quote</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal body */}
              <div className="bg-white/70 backdrop-blur-md px-6 py-4">
                <form className="space-y-4">
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

                  <div>
                    <label htmlFor="modal_email" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
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
        </div>
      )}
    </main>
  );
}
