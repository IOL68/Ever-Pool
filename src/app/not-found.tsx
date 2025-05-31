"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-cyan-800 relative overflow-hidden flex items-center justify-center">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="relative mb-8 select-none">
            <h1 className="text-[150px] md:text-[200px] font-bold text-white opacity-10">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl md:text-5xl font-bold text-white">
                Page Not Found
              </div>
            </div>
          </div>

          {/* Message */}
          <p className="text-lg text-cyan-100 mb-12">
            Oops! The page you&apos;re looking for seems to have taken a swim. Let&apos;s get you back to the surface.
          </p>

          {/* Action Button */}
          <div className="flex justify-center">
            <Link 
              href="/"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center group"
            >
              <svg 
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
