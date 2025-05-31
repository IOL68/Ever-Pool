"use client";

import { useState, useLayoutEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
    // Iniciar animación de entrada después de montar
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsAnimatingIn(true);
      });
    });

    // Simular tiempo de carga
    const loadTimer = setTimeout(() => {
      setIsAnimatingOut(true);
      // Esperar a que termine la animación antes de ocultar completamente
      const hideTimer = setTimeout(() => {
        setIsLoading(false);
      }, 800); // Duración de la animación fadeOutScale
      return () => clearTimeout(hideTimer);
    }, 2000);

    return () => clearTimeout(loadTimer);
  }, []);

  if (!mounted) return null;
  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center -mt-32 transition-all duration-800 bg-white/30 backdrop-blur-md ${
        isAnimatingOut ? 'opacity-0 backdrop-blur-none' : isAnimatingIn ? 'opacity-100 backdrop-blur-md' : 'opacity-0 backdrop-blur-none'
      }`}
    >
      <div className="relative w-[300px] h-[180px] md:w-[500px] md:h-[300px] transition-all duration-800">
        <div className={`transition-all duration-800 transform ${isAnimatingOut ? 'animate-fadeout-scale' : isAnimatingIn ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-90 opacity-0'}`}>
        <Image
          src="/everblue-logo.png"
          alt="EverBlue Pool Logo"
          width={500}
          height={300}
          className="object-contain drop-shadow-2xl"
          priority
        />
        </div>
      </div>
    </div>
  );
}
