import { DiagnosticQuiz } from '../components/DiagnosticQuiz';
import { ShieldCheck, Clock, Wrench, ArrowRight, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import reviewsData from '../data/reviews.json';
import catalogData from '../data/catalog.json';

import audiLogo from '../assets/img/logos_exp/audi_logo.png';
import bmwLogo from '../assets/img/logos_exp/bmw_logo.png';
import fordLogo from '../assets/img/logos_exp/ford_logo.png';
import hondaLogo from '../assets/img/logos_exp/honda_logo.png';
import hyundaiLogo from '../assets/img/logos_exp/hyundai_logo.png';
import jaguarLogo from '../assets/img/logos_exp/jaguar_png.png';
import kiaLogo from '../assets/img/logos_exp/kia_png.png';
import landHoverLogo from '../assets/img/logos_exp/landHover_png.png';
import mazdaLogo from '../assets/img/logos_exp/mazda_logo.png';
import mercedesLogo from '../assets/img/logos_exp/mercedes_logo.png';
import renautLogo from '../assets/img/logos_exp/renaut_logo.png';
import subaruLogo from '../assets/img/logos_exp/subaru_png.png';
import toyotaLogo from '../assets/img/logos_exp/toyota_logo.png';
import volkswagemLogo from '../assets/img/logos_exp/volkswagem_logo.png';

const MARCAS_LOGOS = [
  audiLogo, bmwLogo, fordLogo, hondaLogo, hyundaiLogo, jaguarLogo, kiaLogo,
  landHoverLogo, mazdaLogo, mercedesLogo, renautLogo, subaruLogo, toyotaLogo, volkswagemLogo
];

const WHATSAPP_NUMBER = "5511961091591";
const GOOGLE_REVIEW_LINK = "https://share.google/bLuiuuc01qPdZLvr3";

export function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16 overflow-hidden">

      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-12 md:mt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 tracking-tight">
            Seu carro de volta à rua, <span className="text-green-500">sem dor de cabeça</span>.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-4">
            A Jcar é sua oficina mecânica especializada em devolver a performance original do seu veículo com total transparência. Esqueça os orçamentos surpresas: aqui você acompanha tudo de perto, com garantia de qualidade e equipamentos de ponta.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-8 bg-zinc-100 dark:bg-zinc-900 w-fit mx-auto px-6 py-3 rounded-full">
            <span className="flex items-center gap-2">
              📍 Rua Atucuri 608 - Tatuapé
            </span>
            <span className="hidden sm:block text-zinc-300 dark:text-zinc-700">|</span>
            <span className="flex items-center gap-2">
              📞 (11) 96109-1591
            </span>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, Jcar! Vi o site e gostaria de agendar uma avaliação.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-transform hover:scale-105 shadow-lg mb-12"
          >
            <MessageCircle className="h-5 w-5" />
            Agendar via WhatsApp
          </a>
        </div>

        <DiagnosticQuiz />
      </section>

      {/* Serviços Rápidos (Atalhos) */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Serviços Prestados</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Clique para ver detalhes e sintomas</p>
          </div>
          <Link to="/servicos" className="hidden sm:flex text-green-500 hover:text-green-600 font-medium items-center gap-1">
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {catalogData.slice(0, 4).map((servico) => (
            <Link
              key={servico.id}
              to="/servicos"
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl hover:border-green-500 transition-colors group cursor-pointer"
            >
              <h3 className="font-bold text-lg mb-2 group-hover:text-green-500 transition-colors">{servico.titulo}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2">{servico.descricao || servico.sintomaComum}</p>
            </Link>
          ))}
        </div>
        <Link to="/servicos" className="sm:hidden text-green-500 font-medium flex items-center justify-center gap-1 mt-6">
          Ver todos os serviços <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Autoridade e Marcas */}
      <section className="py-16 bg-zinc-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">7+ Anos de Experiência</h1>
          <p className="text-zinc-400 mt-2">Especialistas nas melhores montadoras do mercado</p>
        </div>

        {/* Carrossel de Imagens (Loop Infinito) */}
        <div className="relative flex w-full overflow-hidden bg-zinc-800 py-6">
          {/* Alterado para usar a classe compilada animate-marquee */}
          <div className="animate-marquee">
            <div className="flex gap-16 px-8 items-center shrink-0">
              {MARCAS_LOGOS.map((logo, i) => (
                <img key={`m1-${i}`} src={logo} alt="Marca Parceira" className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
              ))}
            </div>
            <div className="flex gap-16 px-8 items-center shrink-0">
              {MARCAS_LOGOS.map((logo, i) => (
                <img key={`m2-${i}`} src={logo} alt="Marca Parceira" className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social (Google Reviews) */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">O que dizem nossos clientes</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">Avaliações reais do Google</p>

          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium bg-green-50 hover:bg-green-100 px-6 py-2 rounded-full transition-colors"
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