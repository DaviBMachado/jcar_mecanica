import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-12 text-left mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Coluna 1: Sobre */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Jcar Mecânica</h3>
          <p className="text-sm leading-relaxed mb-4">
            Especialistas em injeção eletrônica, suspensão, freios e revisão geral. O cuidado que seu carro merece, com a transparência que você exige.
          </p>
          <Link to="/sobre" className="text-green-500 hover:text-green-400 text-sm font-medium transition-colors">
            Saiba mais sobre nós
          </Link>
        </div>

        {/* Coluna 2: Contatos */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contato</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <Phone className="h-4 w-4 text-zinc-400 shrink-0" /> 
              <span>(11) 96109-1591</span>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <Mail className="h-4 w-4 text-zinc-400 shrink-0" /> 
              <span className="break-all">contatojcarmecanica@gmail.com.br</span>
            </li>
            <li className="flex items-start gap-3 hover:text-white transition-colors">
              <MapPin className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5" /> 
              <span>Rua Atucuri 608 - Tatuapé<br/>São Paulo, SP</span>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Horários */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Funcionamento</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between border-b border-zinc-800 pb-2">
              <span>Segunda a Sexta</span>
              <span className="font-medium text-white">08:00 - 18:00</span>
            </li>
            <li className="flex justify-between border-b border-zinc-800 pb-2 pt-1">
              <span>Sábado</span>
              <span className="font-medium text-white">08:00 - 13:00</span>
            </li>
            <li className="flex justify-between text-zinc-500 pt-1">
              <span>Domingo</span>
              <span>Fechado</span>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Mapa do Google Embed */}
        <div className="w-full h-full min-h-[160px] bg-slate-800 rounded-lg overflow-hidden shadow-inner">
          <iframe 
            src="https://maps.google.com/maps?q=Rua+Atucuri+608+-+Tatuape&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Jcar Mecânica"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Jcar Mecânica. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}