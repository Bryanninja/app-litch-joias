"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from '@/components/Button';

gsap.registerPlugin(ScrollTrigger);

export default function Lifestyle() {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && imagesRef.current) {
      gsap.fromTo(
        imagesRef.current.children,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-licht-taupe/10 relative overflow-hidden">
      
      {/* Decorative large circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] border border-licht-gold/20 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] border border-licht-dark/10 rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-licht-dark mb-6">Alta joalheria para encantar<br/>em todos os dias.</h2>
          <p className="text-licht-dark/70 max-w-2xl mx-auto font-light">
            Além das alianças, descubra nossa seleção curada de correntes, pulseiras, brincos e anéis solitários em legítimo Ouro 18k e Prata 925.
          </p>
        </div>

        <div ref={imagesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          
          <div className="relative h-full w-full overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
              alt="Modelo usando joias Licht"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <Button variant="white">
                Linha Feminina
              </Button>
            </div>
          </div>

          <div className="relative h-full w-full overflow-hidden group md:-translate-y-12">
            <Image 
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop"
              alt="Colar Licht em destaque"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <Button variant="white">
                Linha Masculina
              </Button>
            </div>
          </div>

          <div className="relative h-full w-full overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
              alt="Anéis Licht exclusividade"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <Button variant="white">
                Joias Sob Encomenda
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
