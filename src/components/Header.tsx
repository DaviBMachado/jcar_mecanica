import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logos_ngc/logo_limpa.png";
import { useThemeStore } from '../store/useThemeStore';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMobileClick = () => {
    toggleMenu();
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90 transition-colors duration-300">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 relative">

        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50">
          <img src={logo} alt="JCAR Mecânica" className="h-24 w-24 object-contain" />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-2xl">JCAR</span>
            <span className="text-base text-zinc-400 dark:text-zinc-300 font-medium mt-0">Mecânica Automotiva</span>
          </div>
        </Link>

        {/* Navegação e Ações Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8 font-medium text-lg">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors">Início</Link>
            <Link to="/servicos" onClick={() => window.scrollTo(0, 0)} className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors">Serviços</Link>
            <Link to="/sobre" onClick={() => window.scrollTo(0, 0)} className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors">Sobre Nós</Link>
            <Link to="/trabalhe-conosco" onClick={() => window.scrollTo(0, 0)} className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors">Trabalhe Conosco</Link>
          </nav>
          
          {/* Toggle Theme Desktop */}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors" aria-label="Alternar Tema">
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
        </div>

        {/* Ações Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 text-zinc-600 dark:text-zinc-400" aria-label="Alternar Tema">
            {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
          </button>
          <button className="p-2 text-zinc-600 dark:text-zinc-400" onClick={toggleMenu} aria-label="Abrir menu">
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-4 flex flex-col gap-4 shadow-lg absolute w-full transition-colors duration-300">
          <Link to="/" onClick={handleMobileClick} className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 text-lg font-medium py-3 border-b border-zinc-100 dark:border-zinc-900">Início</Link>
          <Link to="/servicos" onClick={handleMobileClick} className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 text-lg font-medium py-3 border-b border-zinc-100 dark:border-zinc-900">Serviços</Link>
          <Link to="/sobre" onClick={handleMobileClick} className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 text-lg font-medium py-3 border-b border-zinc-100 dark:border-zinc-900">Sobre Nós</Link>
          <Link to="/trabalhe-conosco" onClick={handleMobileClick} className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 text-lg font-medium py-3">Trabalhe Conosco</Link>
        </nav>
      )}
    </header>
  );
}