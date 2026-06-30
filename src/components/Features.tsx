'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && textRef.current && imageRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        },
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        },
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-licht-light relative overflow-hidden py-24"
    >
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/Pattern.svg')",
          backgroundSize: '1200px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'right center',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div ref={textRef} className="max-w-xl">
            <h4 className="text-licht-taupe mb-4 text-sm tracking-widest uppercase">
              Explore nossas categorias
            </h4>
            <h2 className="text-licht-dark mb-6 font-serif text-4xl leading-snug lg:text-5xl">
              Designs que marcam histórias.
            </h2>
            <p className="text-licht-dark/70 mb-8 text-lg font-light">
              Uma seleção exclusiva dos modelos mais desejados por casais que
              buscam eternizar o compromisso com elegância e significado.
            </p>

            <div className="flex items-start space-x-4">
              <div className="rounded-sm bg-white p-4 shadow-md">
                <p className="text-licht-taupe mb-1 text-xs tracking-wider uppercase">
                  Destaque
                </p>
                <h5 className="text-licht-dark mb-2 font-serif text-lg">
                  Alianças de casamento
                </h5>
                <p className="text-licht-dark/70 text-sm font-light">
                  Alianças artesanais com conforto semi anatômico, acabamento
                  impecável e gravação a laser personalizada inclusa.
                </p>
              </div>
            </div>
          </div>

          <div
            ref={imageRef}
            className="relative h-[500px] w-full"
          >
            <div className="from-licht-taupe/20 absolute inset-0 rounded-full bg-gradient-to-tr to-transparent opacity-50 blur-3xl"></div>
            <Image
              src="/photos/anel.jpg"
              alt="Aliança em destaque"
              fill
              className="object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
