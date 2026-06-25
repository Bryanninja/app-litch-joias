import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Termos e Condições | Licht Joias",
  description: "Termos e Condições de uso da Licht Joias e Semijoias.",
};

export default function Termos() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-licht-light min-h-screen">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif text-licht-dark mb-8">Termos e Condições</h1>
          
          <div className="space-y-6 text-licht-dark/80 font-light">
            <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-licht-dark mt-8 mb-4">1. Introdução</h2>
              <p>Bem-vindo à Licht Joias e Semijoias. Ao acessar e utilizar nosso site, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso. Se você discorda de qualquer parte destes termos, não deve utilizar nosso site.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-licht-dark mt-8 mb-4">2. Produtos e Autenticidade</h2>
              <p>Todas as nossas joias em Ouro 18k e Prata 925 acompanham certificado de garantia vitalícia do teor do metal. As imagens dos produtos podem apresentar pequenas variações de cor devido à iluminação e configurações do seu monitor.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-licht-dark mt-8 mb-4">3. Encomendas Sob Medida</h2>
              <p>Projetos desenvolvidos sob medida possuem um prazo de confecção que será devidamente informado durante o atendimento consultivo. Uma vez iniciada a produção de uma peça exclusiva aprovada pelo cliente, não aceitamos cancelamentos.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-licht-dark mt-8 mb-4">4. Política de Preços</h2>
              <p>Os preços dos produtos estão sujeitos a alterações sem aviso prévio. O preço válido será o indicado no momento da finalização da compra ou acordo no atendimento via WhatsApp.</p>
            </section>

          </div>
          
          <div className="mt-12 pt-8 border-t border-licht-taupe/20">
            <Link href="/" className="text-licht-gold hover:text-licht-dark transition-colors uppercase tracking-widest text-sm font-semibold">
              ← Voltar para o Início
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
