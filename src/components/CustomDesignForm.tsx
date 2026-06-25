"use client";

import { useRef, useEffect, useState, FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";

gsap.registerPlugin(ScrollTrigger);

export default function CustomDesignForm() {
  const formRef = useRef<HTMLDivElement>(null);
  
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [momento, setMomento] = useState("");

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const clientName = nome.trim() ? nome : "um cliente";
    const momentInfo = momento.trim() ? ` Meu momento especial é: ${momento}.` : "";
    const msg = `Olá Ana! Meu nome é ${clientName}.${momentInfo} Gostaria de solicitar um atendimento VIP para criar uma joia sob medida.`;
    window.open(getWhatsAppLink(msg), "_blank");
  };

  return (
    <section className="py-32 relative bg-licht-taupe overflow-hidden">
      {/* Decorative overlapping white rings */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full border-2 border-white absolute -top-40 -left-20" />
        <div className="w-[1200px] h-[1200px] rounded-full border-2 border-white absolute top-20 right-0" />
        <div className="w-[600px] h-[600px] rounded-full border-2 border-white absolute bottom-10 left-10" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex justify-center">
        
        <div ref={formRef} className="bg-white p-12 md:p-16 max-w-2xl w-full shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-licht-dark mb-4">
              Deseja um design totalmente exclusivo?
            </h2>
            <p className="text-licht-taupe font-light">
              Além dos nossos modelos tradicionais, confeccionamos joias sob encomenda para refletir exatamente a personalidade do casal. Deixe seu contato e nossa equipe de atendimento especializado ajudará a desenhar o seu projeto.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input 
                type="text" 
                placeholder="Nome" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border-b border-licht-taupe/40 pb-3 bg-transparent outline-none focus:border-licht-gold transition-colors font-light placeholder:text-licht-taupe/70"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="WhatsApp" 
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full border-b border-licht-taupe/40 pb-3 bg-transparent outline-none focus:border-licht-gold transition-colors font-light placeholder:text-licht-taupe/70"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Qual é o seu momento? (Noivado, Casamento, Namoro)" 
                value={momento}
                onChange={(e) => setMomento(e.target.value)}
                className="w-full border-b border-licht-taupe/40 pb-3 bg-transparent outline-none focus:border-licht-gold transition-colors font-light placeholder:text-licht-taupe/70"
              />
            </div>

            <Button type="submit" variant="form" className="mt-4">
              SOLICITAR ATENDIMENTO VIP
            </Button>
          </form>
        </div>

      </div>
    </section>
  );
}
