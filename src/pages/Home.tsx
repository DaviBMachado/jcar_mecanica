import { DiagnosticQuiz } from '../components/DiagnosticQuiz';
import { ShieldCheck, Clock, Wrench, ArrowRight, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import reviewsData from '../data/reviews.json';
import catalogData from '../data/catalog.json';
import config from '../data/config.json';

import { getPublicImage } from '../libs/imageUtils'

const MARCAS_LOGOS = [
  getPublicImage('images/logos_exp/audi_logo.png'),
  getPublicImage('images/logos_exp/bmw_logo.png'),
  getPublicImage('images/logos_exp/ford_logo.png'),
  getPublicImage('images/logos_exp/honda_logo.png'),
  getPublicImage('images/logos_exp/hyundai_logo.png'),
  getPublicImage('images/logos_exp/jaguar_png.png'),
  getPublicImage('images/logos_exp/kia_png.png'),
  getPublicImage('images/logos_exp/landHover_png.png'),
  getPublicImage('images/logos_exp/mazda_logo.png'),
  getPublicImage('images/logos_exp/mercedes_logo.png'),
  getPublicImage('images/logos_exp/renaut_logo.png'),
  getPublicImage('images/logos_exp/subaru_png.png'),
  getPublicImage('images/logos_exp/toyota_logo.png'),
  getPublicImage('images/logos_exp/volkswagem_logo.png')
];

const { whatsapp } = config.contato;
const GOOGLE_REVIEW_LINK = "https://share.google/bLuiuuc01qPdZLvr3";
const stats = [
  { value: '30', label: 'Anos de experiência' },
  { value: '500+', label: 'Clientes satisfeitos' },
  { value: '90d', label: 'De garantia em todos os serviços' },
  { value: '100%', label: 'Transparência no orçamento' },
];

export function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16 overflow-hidden">
      <section
        className="relative w-full px-4 pt-10 pb-16 md:pt-16 md:pb-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${getPublicImage('images/home_main.jpeg')})` }}
      >
        <div className="absolute inset-0 bg-black/75 z-0"></div>

        <div className="container relative mx-auto text-center mb-12 z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
            Atendemos por: <span className="text-blue-400">Agendamento e Ordem de chegada</span>.
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 text-base md:text-lg font-medium text-white mb-10 bg-zinc-900/60 backdrop-blur-md w-fit mx-auto px-6 py-5 rounded-2xl border border-white/10 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
              <a href="https://maps.google.com/?q=Rua+Atucuri+608+-+Tatuapé+-+São+Paulo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                📍 Rua Atucuri 608 - Tatuapé
              </a>
              <span className="hidden md:block text-zinc-500">|</span>
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                📞 (11) 96109-1591
              </a>
              <span className="hidden md:block text-zinc-500">|</span>
              <a href="https://www.instagram.com/jcar_leste/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <img src={getPublicImage('images/logos_ngc/Instagram_icon.png')} alt="instagram_icon" className="h-4 w-4 shrink-0 object-contain opacity-70" />
                @jcar_leste
              </a>
            </div>
            <div className="flex items-center justify-center w-full pt-3 mt-1 border-t border-white/10 text-sm md:text-base text-zinc-300">
              <span className="flex items-center gap-2 text-center">
                💳 Formas de pagamento: Pix, débito e cartão de crédito
              </span>
            </div>
          </div>

          {/* Botão Secundário CTA - Vermelho */}
          <a
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Olá, Jcar! Vi o site e gostaria de agendar uma avaliação.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded-lg transition-transform hover:scale-105 shadow-xl"
          >
            <MessageCircle className="h-6 w-6" />
            Agendar via WhatsApp
          </a>
        </div>
      </section>

      <div className="bg-zinc-50 dark:bg-zinc-950 py-10 px-4 border-y border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-500">{s.value}</span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <section>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto mb-8 text-center px-4">
          Para um diagnóstico rápido que pode facilitar seu agendamento, responda o quiz abaixo:
        </p>
        <DiagnosticQuiz />
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">Serviços Prestados</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">Clique para ver detalhes e sintomas de cada manutenção.</p>

          <Link
            to="/servicos"
            onClick={() => window.scrollTo(0, 0)}
            className="text-red-600 dark:text-red-500 hover:text-red-700 font-bold text-lg flex items-center gap-2 transition-colors"
          >
            Ver todos os serviços <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {catalogData.slice(0, 6).map((servico) => (
            <Link
              key={servico.id}
              to={`/servicos#${servico.id}`}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group cursor-pointer"
            >
              <h3 className="font-bold text-2xl mb-3 text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 transition-colors">{servico.titulo}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
                {servico.sintomaComum}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">30+ Anos de Experiência</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mt-4">Especialistas nas melhores montadoras do mercado</p>
        </div>

        <div className="relative flex w-full overflow-hidden bg-white dark:bg-zinc-800 py-8 border-y border-zinc-200 dark:border-zinc-700">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            <div className="flex gap-20 px-10 items-center shrink-0">
              {MARCAS_LOGOS.map((logo, i) => (
                <img key={`m1-${i}`} src={logo} alt="Marca Parceira" className="h-16 md:h-24 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
              ))}
            </div>
            <div className="flex gap-20 px-10 items-center shrink-0">
              {MARCAS_LOGOS.map((logo, i) => (
                <img key={`m2-${i}`} src={logo} alt="Marca Parceira" className="h-16 md:h-24 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">O que dizem nossos clientes</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">Avaliações reais do Google</p>

          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 px-6 py-2 rounded-full transition-colors"
          >
            Avalie-nos no Google <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
          {reviewsData.map((review, idx) => (
            <div key={idx} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 mb-6 italic">"{review.text}"</p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-zinc-900 dark:text-white">{review.author_name}</span>
                <span className="text-zinc-500">{review.relative_time_description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-sm border border-zinc-200 dark:border-zinc-700">
              <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Garantia de Serviço</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Peças originais e mão de obra com garantia de 90 dias.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-sm border border-zinc-200 dark:border-zinc-700">
              <Clock className="h-6 w-6 text-blue-600 dark:text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Entrega no Prazo</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Seu tempo vale muito. Cumprimos rigorosamente os prazos acordados.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-sm border border-zinc-200 dark:border-zinc-700">
              <Wrench className="h-6 w-6 text-blue-600 dark:text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Diagnóstico Transparente</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Você aprova o orçamento antes, sem surpresas no final.</p>
          </div>
        </div>
      </section>
    </div>
  );
}