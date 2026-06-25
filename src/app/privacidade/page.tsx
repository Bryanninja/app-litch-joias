import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidade | Licht Joias",
  description: "Política de Privacidade e proteção de dados da Licht Joias.",
};

export default function Privacidade() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-licht-light min-h-screen">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif text-licht-dark mb-8">Política de Privacidade</h1>
          
          <div className="space-y-6 text-licht-dark/80 font-light">
            <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-licht-dark mt-8 mb-4">1. Coleta de Informações</h2>
              <p>A Licht Joias coleta informações pessoais apenas quando estritamente necessárias para a prestação dos nossos serviços, como no preenchimento de formulários de contato ou realização de encomendas. As informações coletadas incluem nome, telefone e preferências para o design da joia.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-licht-dark mt-8 mb-4">2. Uso das Informações</h2>
              <p>Utilizamos suas informações exclusivamente para o propósito de atendimento consultivo, agendamento de reuniões, orçamentos e para garantir que a confecção da sua joia seja exatamente como você sonhou.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-licht-dark mt-8 mb-4">3. Proteção e Segurança</h2>
              <p>Comprometemo-nos a manter seus dados em sigilo. Não compartilhamos, vendemos ou alugamos as informações pessoais dos nossos clientes para terceiros em hipótese alguma.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-licht-dark mt-8 mb-4">4. Contato</h2>
              <p>Caso tenha qualquer dúvida sobre nossa política de privacidade ou sobre como lidamos com seus dados, sinta-se à vontade para nos contatar através do nosso WhatsApp oficial ou visitando nossa loja em Pedro Leopoldo.</p>
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
