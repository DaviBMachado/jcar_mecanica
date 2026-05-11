import { Briefcase, Wrench, GraduationCap, Users, FileText, CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import config from '../data/config.json';
import bgTrabalhe from '../assets/img/home_main.jpeg';

export function TrabalheConosco() {
  const { email, whatsapp } = config.contato;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl mb-16">
      <div
        className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center py-24 px-6 text-center"
        style={{
          backgroundImage: `url(${bgTrabalhe})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 w-full max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight drop-shadow-md">
            Venha para o nosso time!
          </h1>
          <p className="text-lg text-zinc-200 drop-shadow">
            Estamos sempre em busca de profissionais dedicados, honestos e apaixonados por mecânica automotiva.
          </p>
        </div>
      </div>

      <section className="mb-16 bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <h2 className="text-2xl font-bold mb-8 flex items-center justify-center md:justify-start gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4 text-zinc-900 dark:text-zinc-100">
          <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-500" />
          Exigências Mínimas de Capacitação
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 transition-colors">
            <Wrench className="h-10 w-10 text-zinc-700 dark:text-zinc-300 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-zinc-100">Experiência</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Experiência comprovada com mecânica automotiva na prática.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 transition-colors">
            <GraduationCap className="h-10 w-10 text-zinc-700 dark:text-zinc-300 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-zinc-100">Formação</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Curso técnico profissionalizante concluído em mecânica.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 transition-colors">
            <Users className="h-10 w-10 text-zinc-700 dark:text-zinc-300 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-zinc-100">Trabalho em Equipe</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Boa comunicação, proatividade e facilidade para atuar em conjunto.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="inline-flex items-center justify-center p-5 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
          <FileText className="h-10 w-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">Mande seu currículo aqui!</h2>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 rounded-xl max-w-2xl mx-auto mb-10 text-left shadow-sm">
          <h3 className="font-bold text-xl mb-4 text-zinc-900 dark:text-zinc-100">Instruções para o envio:</h3>
          <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
              <span>Envie seu currículo atualizado preferencialmente em formato <strong>PDF</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
              <span>No assunto do e-mail ou na primeira mensagem do WhatsApp, escreva: <strong>"Vaga Mecânico - [Seu Nome]"</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
              <span>Inclua uma breve mensagem se apresentando e destacando seu ponto forte na oficina.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`mailto:${email}?subject=Vaga Mecânico - [Seu Nome]`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-bold py-4 px-8 rounded-lg transition-transform hover:scale-105 shadow-md"
          >
            <Mail className="h-5 w-5" />
            Enviar por E-mail
          </a>

          <a
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Olá! Gostaria de enviar meu currículo para a vaga de mecânico. Seguem minhas informações:")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-transform hover:scale-105 shadow-md"
          >
            <MessageCircle className="h-5 w-5" />
            Enviar via WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}