import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-licht-light pt-24 pb-8 border-t border-licht-taupe/20 text-licht-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Logo className="w-32 text-licht-dark" />
            </Link>
            <p className="text-licht-dark/70 font-light mb-6">
              Joias e semijoias de alto padrão. Ouro 18k, Prata 925 e Moissanites. 
              Iluminando seus momentos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-licht-taupe flex items-center justify-center hover:bg-licht-gold hover:text-white hover:border-licht-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-licht-taupe flex items-center justify-center hover:bg-licht-gold hover:text-white hover:border-licht-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-licht-taupe flex items-center justify-center hover:bg-licht-gold hover:text-white hover:border-licht-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-4 font-light text-licht-dark/80">
              <li><Link href="#" className="hover:text-licht-gold transition-colors">Sobre a Licht</Link></li>
              <li><Link href="#" className="hover:text-licht-gold transition-colors">Lojas Físicas</Link></li>
              <li><Link href="#" className="hover:text-licht-gold transition-colors">Carreiras</Link></li>
              <li><Link href="#" className="hover:text-licht-gold transition-colors">Sustentabilidade</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4 font-light text-licht-dark/80">
              <li><Link href="#" className="hover:text-licht-gold transition-colors">Alianças de Casamento</Link></li>
              <li><Link href="#" className="hover:text-licht-gold transition-colors">Anéis de Noivado</Link></li>
              <li><Link href="#" className="hover:text-licht-gold transition-colors">Coleção Prata 925</Link></li>
              <li><Link href="#" className="hover:text-licht-gold transition-colors">Coleção Ouro 18k</Link></li>
              <li><Link href="#" className="hover:text-licht-gold transition-colors">Design Personalizado</Link></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="font-serif text-lg mb-6">Atendimento</h4>
            <ul className="space-y-4 font-light text-licht-dark/80">
              <li><Link href="#" className="hover:text-licht-gold transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-licht-gold transition-colors">Trocas e Devoluções</Link></li>
              <li><Link href="#" className="hover:text-licht-gold transition-colors">Garantia Vitalícia</Link></li>
              <li><Link href="#" className="hover:text-licht-gold transition-colors">Fale Conosco</Link></li>
              <li><Link href="#" className="hover:text-licht-gold transition-colors">Acompanhe seu Pedido</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-licht-taupe/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-licht-dark/60 font-light">
          <p>&copy; {new Date().getFullYear()} Licht Joias e Semijoias. Todos os direitos reservados.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <Link href="/termos" className="hover:text-licht-gold transition-colors">Termos e Condições</Link>
            <Link href="/privacidade" className="hover:text-licht-gold transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
