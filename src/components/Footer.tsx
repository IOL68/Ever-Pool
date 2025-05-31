"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-400 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Information */}
          <div className="col-span-1 md:col-span-4">
            <div className="mb-8">
              <Link href="/" className="block transition-transform hover:scale-105">
                <Image
                  src="/everblue-logo.png"
                  alt="EverBlue Pool Logo"
                  width={90}
                  height={54}
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">California&apos;s premier commercial pool construction specialists, delivering excellence in design, construction, and maintenance for over two decades.</p>
            <p className="text-gray-300 mb-6 flex items-center">
              <span className="inline-block mr-2 px-3 py-1 bg-blue-700/40 backdrop-blur-sm rounded-md text-blue-200 text-xs font-medium">License #: CA-12345678</span>
            </p>
            <div className="flex space-x-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-blue-600 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-gradient-to-tr from-purple-600 to-pink-500 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path></svg>
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-blue-700 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                </div>
              </a>
            </div>
          </div>
          
          {/* Links Section - Quick Links & Services */}
          <div className="col-span-1 md:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 flex items-center">
                  <span className="w-8 h-0.5 bg-blue-400 rounded-full mr-3"></span>
                  <span>Quick Links</span>
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-white flex items-center group transition-colors">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-white flex items-center group transition-colors">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-300 hover:text-white flex items-center group transition-colors">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-gray-300 hover:text-white flex items-center group transition-colors">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-300 hover:text-white flex items-center group transition-colors">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-6 flex items-center">
                  <span className="w-8 h-0.5 bg-blue-400 rounded-full mr-3"></span>
                  <span>Our Services</span>
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/services#construction" className="text-gray-300 hover:text-white flex items-center group transition-colors">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Commercial Pool Construction
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#renovation" className="text-gray-300 hover:text-white flex items-center group transition-colors">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Pool Renovation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#maintenance" className="text-gray-300 hover:text-white flex items-center group transition-colors">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Maintenance & Repairs
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#design" className="text-gray-300 hover:text-white flex items-center group transition-colors">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Design Consultation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#compliance" className="text-gray-300 hover:text-white flex items-center group transition-colors">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Compliance & Safety
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-blue-400 rounded-full mr-3"></span>
              <span>Contact Us</span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm mr-4 group-hover:bg-blue-600/30 transition-colors">
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Address</p>
                  <p className="text-gray-400 mt-1">1234 Pool Avenue<br/>San Diego, CA 92101</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm mr-4 group-hover:bg-blue-600/30 transition-colors">
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Phone</p>
                  <p className="text-gray-400 mt-1">(555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm mr-4 group-hover:bg-blue-600/30 transition-colors">
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Email</p>
                  <p className="text-gray-400 mt-1">info@everbluepool.com</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm mr-4 group-hover:bg-blue-600/30 transition-colors">
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Hours</p>
                  <p className="text-gray-400 mt-1">Mon-Fri: 8AM - 5PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section with Copyright and Links */}
        <div className="mt-16 pt-8 border-t border-blue-800/60">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} EverBlue Pool S&R LLC.</p>
              <p className="text-gray-500 text-sm md:ml-2">All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline underline-offset-4">
                Terms & Conditions
              </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
