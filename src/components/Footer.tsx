import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import instaIcon from '../assets/img/logos_ngc/Instagram_icon.png';

export function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 py-12 text-left mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>
          <h3 className="text-zinc-900 dark:text-white text-lg font-bold mb-4">Jcar Mecânica</h3>
          <p className="text-sm leading-relaxed mb-4">
            Especialistas em injeção eletrônica, suspensão, freios e revisão geral. O cuidado que seu carro merece, com a transparência que você exige.
          </p>
          <Link
            to="/sobre"
            className="text-blue-600 dark:text-blue-500 hover:text-red-600 dark:hover:text-red-500 text-sm font-medium transition-colors"
          >
            Saiba mais sobre nós
          </Link>
        </div>

        <div>
          <h3 className="text-zinc-900 dark:text-white text-lg font-bold mb-4">Contato</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 hover:text-red-600 dark:hover:text-red-500 transition-colors">
              <Phone className="h-4 w-4 text-blue-500 shrink-0" />
              <span>(11) 96109-1591</span>
            </li>
            <li className="flex items-center gap-3 hover:text-red-600 dark:hover:text-red-500 transition-colors">
              <Mail className="h-4 w-4 text-blue-500 shrink-0" />
              <span className="break-all">mecanicajcar8@gmail.com</span>
            </li>
            <li className="flex items-start gap-3 hover:text-red-600 dark:hover:text-red-500 transition-colors">
              <MapPin className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Rua Atucuri 608 - Tatuapé<br />São Paulo, SP</span>
            </li>
            <li className="flex items-center gap-3">
              <img
                src={instaIcon}
                alt="instagram_icon"
                className="h-4 w-4 shrink-0 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <a
                href="https://www.instagram.com/jcar_leste/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                @jcar_leste
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-zinc-900 dark:text-white text-lg font-bold mb-4">Funcionamento</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between py-1 border-b border-zinc-200 dark:border-zinc-800 last:border-0">
              <span>Segunda a Sexta</span>
              <span className="font-medium text-zinc-900 dark:text-white">08:00 - 18:00</span>
            </li>
            <li className="flex justify-between text-zinc-500 dark:text-zinc-500 pt-1">
              <span>Sábado e Domingo</span>
              <span>Fechado</span>
            </li>
          </ul>
        </div>

        <div className="w-full h-full min-h-[160px] bg-zinc-200 dark:bg-slate-800 rounded-lg overflow-hidden shadow-inner border border-zinc-300 dark:border-zinc-800">
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

      <div className="border-t border-zinc-200 dark:border-zinc-800 mt-12 pt-6 text-center text-sm text-zinc-500 dark:text-zinc-500">
        <p>© {new Date().getFullYear()} Jcar Mecânica. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}