"use client";

import { useState } from 'react';

export default function AboutUs() {
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
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Everblue Pools</h1>
            <p className="text-lg text-cyan-100 max-w-4xl mx-auto">Your trusted partner in commercial pool excellence. With years of experience and dedication to quality, we transform aquatic spaces into extraordinary environments.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Founded with a vision to revolutionize commercial pool services in California, Everblue Pools has grown from a small local business to a leading provider of comprehensive pool solutions. Our journey began with a simple belief: every commercial pool should be both beautiful and efficient.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we&apos;ve built our reputation on three core principles: technical excellence, innovative solutions, and unwavering commitment to client satisfaction. These principles guide every project we undertake, from new pool construction to renovation and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="group bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">We maintain the highest standards in every aspect of our work, from design to maintenance.</p>
            </div>

            {/* Value 2 */}
            <div className="group bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">We embrace cutting-edge technology and sustainable solutions for modern pool management.</p>
            </div>

            {/* Value 3 */}
            <div className="group bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Focus</h3>
              <p className="text-gray-600">Your success is our priority. We build lasting relationships through exceptional service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-blue-600 to-cyan-600"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">John Smith</h3>
              <p className="text-cyan-600 mb-2">CEO & Founder</p>
              <p className="text-gray-600">20+ years of experience in commercial pool construction and management.</p>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-blue-600 to-cyan-600"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Johnson</h3>
              <p className="text-cyan-600 mb-2">Technical Director</p>
              <p className="text-gray-600">Expert in sustainable pool systems and water conservation.</p>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-blue-600 to-cyan-600"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Chen</h3>
              <p className="text-cyan-600 mb-2">Operations Manager</p>
              <p className="text-gray-600">Specializes in project management and client relations.</p>
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
              Ready to Transform Your Pool Space?
            </h2>
            <p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you create the perfect aquatic environment for your business.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-6 rounded-md transition duration-300 group"
            >
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
        <div className={`fixed inset-0 z-50 overflow-y-auto ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
          <div className="fixed inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-md transition-all duration-300"></div>
          
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className={`relative transform overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl text-left align-middle shadow-2xl transition-all w-full max-w-lg ${isClosing ? 'animate-slideOut' : 'animate-slideIn'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl -z-10"></div>
              {/* Modal header */}
              <div className="bg-white/80 backdrop-blur-md px-6 py-4 border-b border-gray-200/50">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
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
                    <label htmlFor="modal_message" className="flex text-sm font-medium text-gray-700 mb-1 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Message
                    </label>
                    <textarea id="modal_message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Send Message
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
