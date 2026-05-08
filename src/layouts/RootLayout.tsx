import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppFAB } from '../components/WhatsAppFAB';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Header />
      
      {/* O main com flex-1 empurra o Footer sempre para o final da tela */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}