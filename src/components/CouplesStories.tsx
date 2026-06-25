"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CouplesStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && imagesRef.current) {
      gsap.fromTo(
        imagesRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-licht-dark mb-6">
            Histórias iluminadas em Pedro Leopoldo.
          </h2>
          <p className="text-licht-taupe font-light max-w-2xl mx-auto">
            Mais do que clientes, fazemos parte do capítulo mais importante na vida de centenas de casais da nossa região. Veja quem já escolheu a Licht Joias.
          </p>
        </div>

        <div ref={imagesRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          <div className="relative aspect-[3/4] w-full group overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=800&auto=format&fit=crop"
              alt="Casal"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-licht-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-serif italic text-xl">"O sim mais lindo"</span>
            </div>
          </div>
          
          <div className="relative aspect-[3/4] w-full group overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop"
              alt="Casal"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-licht-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-serif italic text-xl">"Inesquecível"</span>
            </div>
          </div>

          <div className="relative aspect-[3/4] w-full group overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1520697830682-8b4887340b0d?q=80&w=800&auto=format&fit=crop"
              alt="Casal"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-licht-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-serif italic text-xl">"Nossa escolha"</span>
            </div>
          </div>

          <div className="relative aspect-[3/4] w-full group overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop"
              alt="Casal"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-licht-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-serif italic text-xl">"Eternidade"</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
