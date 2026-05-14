import { MessageCircle } from 'lucide-react';
import config from '../data/config.json';

export function WhatsAppFAB() {
  const message = "Olá! Acessei o site e gostaria de agendar uma avaliação para o meu carro.";
  const { whatsapp } = config.contato;
  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      
      {/* Bolinha vermelha de notificação para chamar a atenção do usuário */}
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </a>
  );
}