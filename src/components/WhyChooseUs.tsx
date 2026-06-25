"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gem, ShieldCheck, Truck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
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
    <section ref={sectionRef} className="py-24 bg-licht-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-[600px] w-full">
            <Image 
              src="https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=800&auto=format&fit=crop"
              alt="Caixinha icônica da Licht Joias"
              fill
              className="object-cover"
            />
          </div>

          <div ref={contentRef} className="max-w-xl">
            <h4 className="text-sm uppercase tracking-widest text-licht-taupe mb-4">Qualidade Incomparável</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-licht-dark mb-10 leading-snug">
              Por que a Licht é a escolha de tantos casais?
            </h2>

            <div className="space-y-8">
              
              <div className="flex items-start">
                <div className="mt-1 mr-6 text-licht-gold">
                  <Gem size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-licht-dark mb-2">Autenticidade Garantida.</h3>
                  <p className="text-licht-dark/70 font-light">Todas as peças acompanham certificação de pureza do metal.</p>
                </div>
              </div>

              <div className="h-px w-full bg-licht-taupe/20" />

              <div className="flex items-start">
                <div className="mt-1 mr-6 text-licht-gold">
                  <ShieldCheck size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-licht-dark mb-2">Tranquilidade Vitalícia.</h3>
                  <p className="text-licht-dark/70 font-light">Nossa garantia cobre a sua joia para a vida toda.</p>
                </div>
              </div>

              <div className="h-px w-full bg-licht-taupe/20" />

              <div className="flex items-start">
                <div className="mt-1 mr-6 text-licht-gold">
                  <Truck size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-licht-dark mb-2">Sua Joia Sempre Nova.</h3>
                  <p className="text-licht-dark/70 font-light">Conte conosco para polimentos e ajustes de medida sem custo adicional.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
