import { Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <Wrench className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
          <span>Oficina Mecânica</span>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-6 font-medium text-sm">
          <Link to="/" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
            Início
          </Link>
          <Link to="/servicos" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
            Serviços
          </Link>
          <Link to="/sobre" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
            Sobre Nós
          </Link>
        </nav>

        {/* Espaço reservado para o botão de Dark Mode / Menu Mobile no futuro */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full">
            Em breve
          </span>
        </div>

      </div>
    </header>
  );
}