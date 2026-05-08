import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppFAB } from '../components/WhatsAppFAB';
import { SEO } from '../components/SEO';
import config from '../data/config.json';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 font-sans">
      <SEO 
        title={`${config.oficina.nome} | Especialistas no seu carro`}
        description="Diagnóstico automotivo, revisão preventiva e manutenção com garantia. Agende seu atendimento na melhor oficina da região."
      />
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