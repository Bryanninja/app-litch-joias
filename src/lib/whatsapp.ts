export const WHATSAPP_NUMBER = "5531995648974";

export function getWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export const WHATSAPP_MESSAGES = {
  hero: "Olá! Estava navegando no site e gostaria de explorar a coleção de joias da Licht.",
  navbar: "Olá! Gostaria de falar com um consultor da Licht Joias.",
  finalCta: "Olá! Gostaria de agendar um horário para tomar um café e encontrar a aliança perfeita.",
  linhaFeminina: "Olá! Tenho interesse em conhecer mais sobre a Linha Feminina.",
  linhaMasculina: "Olá! Tenho interesse em conhecer mais sobre a Linha Masculina.",
  sobEncomenda: "Olá! Gostaria de informações sobre o serviço de joias sob encomenda.",
};
