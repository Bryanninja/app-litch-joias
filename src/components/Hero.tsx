'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '@/components/Button';

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.5,
        },
      );
    }
  }, []);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2000&auto=format&fit=crop"
        >
          {/* Using a placeholder URL, will fail silently and show poster if invalid */}
          <source src="/videos/litch-sim.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="bg-licht-dark/40 absolute inset-0 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-3xl px-6 text-center text-white"
        ref={textRef}
      >
        <h1 className="mb-6 font-serif text-5xl md:text-7xl">
          O brilho do seu <span className="italic">"sim"</span> começa aqui.
        </h1>
        <p className="mx-auto mb-10 max-w-md text-lg font-light tracking-wide text-pretty opacity-90 md:text-xl">
          Joias artesanais em Ouro 18k e Prata 925, feitas para materializar a sua história.
        </p>
        <Button variant="primary">
          EXPLORAR COLEÇÃO
        </Button>
      </div>
    </section>
  );
}
