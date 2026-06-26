export default function FeaturesTicker() {
  return (
    <div className="w-full bg-licht-dark border-y border-licht-gold/20 py-4 overflow-hidden relative flex items-center z-20">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* Duplicate the items multiple times for infinite scroll effect */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-8 text-xs sm:text-sm uppercase tracking-widest text-licht-gold font-semibold">
              Envio para todo o Brasil
            </span>
            <span className="text-licht-taupe/40 mx-4">•</span>
            
            <span className="mx-8 text-xs sm:text-sm uppercase tracking-widest text-licht-gold font-semibold">
              Garantia Vitalícia
            </span>
            <span className="text-licht-taupe/40 mx-4">•</span>
            
            <span className="mx-8 text-xs sm:text-sm uppercase tracking-widest text-licht-gold font-semibold">
              Ouro 18k e Prata 925
            </span>
            <span className="text-licht-taupe/40 mx-4">•</span>
            
            <span className="mx-8 text-xs sm:text-sm uppercase tracking-widest text-licht-gold font-semibold">
              Atendimento VIP
            </span>
            <span className="text-licht-taupe/40 mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
