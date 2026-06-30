'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        },
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="container mx-auto px-6 text-center lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-licht-dark mb-6 font-serif text-4xl md:text-5xl">
            Histórias iluminadas em Pedro Leopoldo.
          </h2>
          <p className="text-licht-taupe mx-auto max-w-2xl font-light">
            Mais do que clientes, fazemos parte do capítulo mais importante na
            vida de centenas de casais da nossa região. Veja quem já escolheu a
            Licht Joias.
          </p>
        </div>

        <div
          ref={imagesRef}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <div className="group relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=800&auto=format&fit=crop"
              alt="Casal"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="bg-licht-dark/40 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-serif text-xl text-white italic">
                "O sim mais lindo"
              </span>
            </div>
          </div>

          <div className="group relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop"
              alt="Casal"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="bg-licht-dark/40 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-serif text-xl text-white italic">
                "Inesquecível"
              </span>
            </div>
          </div>

          <div className="group relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1520697830682-8b4887340b0d?q=80&w=800&auto=format&fit=crop"
              alt="Casal"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="bg-licht-dark/40 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-serif text-xl text-white italic">
                "Nossa escolha"
              </span>
            </div>
          </div>

          <div className="group relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop"
              alt="Casal"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="bg-licht-dark/40 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-serif text-xl text-white italic">
                "Eternidade"
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
