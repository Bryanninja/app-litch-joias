import Button from '@/components/Button';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export default function FinalCTA() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-licht-dark/60 mix-blend-multiply" />
      </div>

      {/* Content Box */}
      <div className="relative z-10 max-w-2xl px-6 text-center text-white">
        <h2 className="mb-6 font-serif text-4xl md:text-5xl">
          Vamos encontrar a sua aliança juntos?
        </h2>
        <p className="mx-auto mb-10 text-lg font-light tracking-wide text-pretty opacity-90">
          Escolher a aliança perfeita é um momento único. Fale diretamente com a Ana para um atendimento consultivo pelo WhatsApp, ou venha tomar um café conosco na nossa loja no Centro de Pedro Leopoldo.
        </p>
        <Button variant="primary" href={getWhatsAppLink(WHATSAPP_MESSAGES.finalCta)}>
          ENTRAR EM CONTATO
        </Button>
      </div>

    </section>
  );
}
