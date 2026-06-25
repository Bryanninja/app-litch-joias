"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-licht-light overflow-hidden">
      {/* Background overlapping rings pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full border border-licht-dark absolute -top-40 -left-40" />
        <div className="w-[600px] h-[600px] rounded-full border border-licht-dark absolute top-20 left-20" />
        <div className="w-[1000px] h-[1000px] rounded-full border border-licht-dark absolute -bottom-40 -right-20" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div ref={textRef} className="max-w-xl">
            <h4 className="text-sm uppercase tracking-widest text-licht-taupe mb-4">Explore nossas categorias</h4>
            <h2 className="text-4xl lg:text-5xl font-serif text-licht-dark mb-6 leading-snug">
              Designs que marcam histórias.
            </h2>
            <p className="text-licht-dark/70 text-lg mb-8 font-light">
              Uma seleção exclusiva dos modelos mais desejados por casais que buscam eternizar o compromisso com elegância e significado.
            </p>
            
            <div className="flex items-start space-x-4">
              <div className="p-4 bg-white shadow-md rounded-sm">
                <p className="text-xs uppercase tracking-wider text-licht-taupe mb-1">Destaque</p>
                <h5 className="font-serif text-lg text-licht-dark mb-2">Alianças de casamento</h5>
                <p className="text-sm text-licht-dark/70 font-light">Alianças artesanais com conforto semi anatômico, acabamento impecável e gravação a laser personalizada inclusa.</p>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-licht-taupe/20 to-transparent rounded-full blur-3xl opacity-50"></div>
            <Image 
              src="https://images.unsplash.com/photo-1599643477874-5c866f5c0c0b?q=80&w=1000&auto=format&fit=crop"
              alt="Aliança em destaque"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
