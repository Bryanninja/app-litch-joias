"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "Aliança Classic Silver",
    price: "R$ 450,00",
    rating: 5,
    material: "Prata 925",
    image: "/photos/anel.jpg",
  },
  {
    id: 2,
    name: "Solitário Elegance",
    price: "R$ 680,00",
    rating: 5,
    material: "Prata 925",
    image: "/photos/anel.jpg",
  },
  {
    id: 3,
    name: "Aliança Ouro 18k Tradicional",
    price: "R$ 2.450,00",
    rating: 5,
    material: "Ouro 18k",
    image: "/photos/anel.jpg",
  },
  {
    id: 4,
    name: "Anel Cravejado Ouro 18k",
    price: "R$ 3.100,00",
    rating: 5,
    material: "Ouro 18k",
    image: "/photos/anel.jpg",
  }
];

export default function Materials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.product-card');
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
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
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Prata Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-licht-dark mb-4">A Beleza Atemporal da Prata</h2>
            <p className="text-licht-taupe font-light max-w-2xl mx-auto">
              Modelos maciços e anatômicos em Prata 925 legítima, pensados para o uso diário e para celebrar o início de grandes histórias. A partir de R$ 230,00 o par.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.filter(p => p.material === "Prata 925").map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Ouro Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-licht-dark mb-4">A Pureza Incomparável do Ouro 18k</h2>
              <p className="text-licht-taupe font-light">
                Criadas para simbolizar o amor eterno, nossas alianças em Ouro 18k combinam o brilho duradouro do metal nobre com a exclusividade de detalhes cravejados.
              </p>
            </div>
            <div className="flex flex-col">
              {/* Fake image block for layout, since user mentioned 'Abaixo da foto do casal' */}
              <div className="relative h-64 w-full bg-licht-taupe/20 mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop" 
                  alt="Casal" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <h3 className="text-2xl font-serif text-licht-dark mb-2">A lembrança mais viva do seu "sim".</h3>
              <p className="text-licht-taupe font-light text-sm">
                De todos os detalhes do dia do casamento, a aliança é o único que caminha com você todos os dias, pelas próximas décadas. O Ouro 18k da Licht é trabalhado para carregar o peso da sua promessa e atravessar gerações, mantendo a mesma pureza do primeiro dia.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.filter(p => p.material === "Ouro 18k").map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="product-card group cursor-pointer">
      <div className="relative aspect-square mb-4 bg-licht-light overflow-hidden flex items-center justify-center p-8 transition-all duration-500 group-hover:shadow-lg">
        <Image 
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/80 px-2 py-1 text-xs font-semibold text-licht-dark uppercase tracking-wider">
          {product.material}
        </div>
      </div>
      <div>
        <h3 className="font-serif text-lg text-licht-dark mb-1 group-hover:text-licht-gold transition-colors">{product.name}</h3>
        <p className="font-medium text-licht-dark mb-2">{product.price}</p>
        <div className="flex space-x-1">
          {[...Array(product.rating)].map((_, i) => (
            <Star key={i} size={14} className="fill-licht-gold text-licht-gold" />
          ))}
        </div>
      </div>
    </div>
  );
}
