import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Coluna 1: Sobre */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Oficina Mecânica</h3>
          <p className="text-sm leading-relaxed">
            Especialistas em injeção eletrônica, suspensão, freios e revisão geral. O cuidado que seu carro merece, com a transparência que você exige.
          </p>
        </div>

        {/* Coluna 2: Contatos */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contato</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-4 w-4 text-zinc-500" /> 
              (11) 99999-9999
            </li>
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4 text-zinc-500" /> 
              contato@oficina.com.br
            </li>
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin className="h-4 w-4 text-zinc-500" /> 
              Rua das Peças, 123 - São Paulo, SP
            </li>
          </ul>
        </div>

        {/* Mapa do Google Embed (trocar o link)*/}
        <div className="w-full h-48 bg-slate-800 rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=..." 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Jcar Mecânica"
          />
        </div>

        {/* Coluna 3: Horários */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Funcionamento</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between border-b border-zinc-800 pb-1">
              <span>Segunda a Sexta</span>
              <span className="font-medium text-white">08:00 - 18:00</span>
            </li>
            <li className="flex justify-between border-b border-zinc-800 pb-1">
              <span>Sábado</span>
              <span className="font-medium text-white">08:00 - 13:00</span>
            </li>
            <li className="flex justify-between text-zinc-500">
              <span>Domingo</span>
              <span>Fechado</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Oficina Mecânica. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}