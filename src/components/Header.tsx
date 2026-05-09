import { useState } from 'react';
import { Wrench, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50">
          <Wrench className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
          <span>Jcar Mecânica</span>
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

        {/* Hamburger Button (Mobile) */}
        <button 
          className="md:hidden p-2 text-zinc-600 dark:text-zinc-400"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Navegação Mobile (Dropdown) */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-4 flex flex-col gap-4 shadow-lg absolute w-full">
          <Link to="/" onClick={toggleMenu} className="text-zinc-600 dark:text-zinc-400 font-medium py-2 border-b border-zinc-100 dark:border-zinc-900">
            Início
          </Link>
          <Link to="/servicos" onClick={toggleMenu} className="text-zinc-600 dark:text-zinc-400 font-medium py-2 border-b border-zinc-100 dark:border-zinc-900">
            Serviços
          </Link>
          <Link to="/sobre" onClick={toggleMenu} className="text-zinc-600 dark:text-zinc-400 font-medium py-2">
            Sobre Nós
          </Link>
        </nav>
      )}
    </header>
  );
}