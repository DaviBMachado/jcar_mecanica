import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Header />
      
      {/* O Outlet é onde as páginas (Home, Serviços, etc) vão ser injetadas */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Footer entrará aqui depois */}
    </div>
  );
}