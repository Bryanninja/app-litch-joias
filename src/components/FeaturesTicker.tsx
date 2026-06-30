const RingsIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="text-licht-dark mx-4 opacity-80"
  >
    <circle cx="9" cy="15" r="6" />
    <circle cx="15" cy="11" r="6" />
    <polygon points="15 1 18 4 15 6 12 4" fill="currentColor" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export default function FeaturesTicker() {
  return (
    <div className="w-full bg-licht-taupe py-4 overflow-hidden relative z-20">
      <div className="animate-marquee whitespace-nowrap">
        {/* Duplicate the items multiple times for infinite scroll effect */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="inline-flex items-center">
            <span className="mx-8 text-xs sm:text-sm uppercase tracking-widest text-licht-dark font-semibold">
              Envio para todo o Brasil
            </span>
            <RingsIcon />
            
            <span className="mx-8 text-xs sm:text-sm uppercase tracking-widest text-licht-dark font-semibold">
              Garantia Vitalícia
            </span>
            <RingsIcon />
            
            <span className="mx-8 text-xs sm:text-sm uppercase tracking-widest text-licht-dark font-semibold">
              Ouro 18k e Prata 925
            </span>
            <RingsIcon />
            
            <span className="mx-8 text-xs sm:text-sm uppercase tracking-widest text-licht-dark font-semibold">
              Atendimento VIP
            </span>
            <RingsIcon />
          </div>
        ))}
      </div>
    </div>
  );
}
