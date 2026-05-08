import { DiagnosticQuiz } from '../components/DiagnosticQuiz';
import { ShieldCheck, Clock, Wrench } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-12 md:mt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Seu carro de volta à rua, <span className="text-green-500">sem dor de cabeça</span>.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Oficina especializada com transparência no diagnóstico e garantia em todos os serviços. Faça um pré-diagnóstico agora mesmo.
          </p>
        </div>
        
        <DiagnosticQuiz />
      </section>

      {/* Diferenciais */}
      <section className="bg-zinc-100 dark:bg-zinc-900/50 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-sm">
              <ShieldCheck className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-bold">Garantia de Serviço</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Peças originais e mão de obra com garantia de 90 dias.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-sm">
              <Clock className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-bold">Entrega no Prazo</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Seu tempo vale muito. Cumprimos rigorosamente os prazos acordados.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-sm">
              <Wrench className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-bold">Diagnóstico Transparente</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Você aprova o orçamento antes, sem surpresas no final.</p>
          </div>
        </div>
      </section>
    </div>
  );
}