"use client";

import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaTimes } from 'react-icons/fa';

interface ContactModalProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export default function ContactModal({ isOpen, onCloseAction }: ContactModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Pequeño delay para asegurar que la animación se ejecute
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 ease-in-out ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-700 ${isAnimating ? 'opacity-100 backdrop-blur-[8px]' : 'opacity-0 backdrop-blur-none'}`}
        onClick={onCloseAction}
      />
      
      {/* Modal */}
      <div className={`relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6 transform transition-all duration-700 ease-in-out ${isAnimating ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-90 opacity-0'}`}>
        {/* Close button */}
        <button
          onClick={onCloseAction}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <FaTimes size={20} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

        {/* Contact options */}
        <div className="space-y-4">
          {/* Call option */}
          <a
            href="/call"
            className="flex items-center p-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <FaPhone className="mr-4" size={24} />
            <div>
              <h3 className="font-semibold text-lg">Call Us Now</h3>
              <p className="text-sm text-white/90">Speak directly with our team</p>
            </div>
          </a>

          {/* Message option */}
          <a
            href="/contact"
            className="flex items-center p-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <FaEnvelope className="mr-4" size={24} />
            <div>
              <h3 className="font-semibold text-lg">Send a Message</h3>
              <p className="text-sm text-white/90">We&apos;ll respond within 24 hours</p>
            </div>
          </a>
        </div>

        {/* Footer text */}
        <p className="mt-6 text-sm text-gray-500 text-center">
          Choose the option that works best for you
        </p>
      </div>
    </div>
  );
}
