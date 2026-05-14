import logo from '../assets/img/logos_ngc/logo_limpa.png';
import fotoDono from '../assets/img/perfil_dono.jpeg';
import {
  Target,
  Eye,
  Heart,
  CheckCircle,
  ShieldCheck,
  Wrench,
  Clock,
  Star,
  Users,
  Award,
  ThumbsUp,
  Zap,
  Leaf,
  HandshakeIcon,
} from 'lucide-react';

const mvv = [
  {
    icon: Target,
    label: 'Missão',
    accentColor: 'border-blue-600 dark:border-blue-500',
    iconBg: 'bg-blue-100 dark:bg-blue-500/10',
    iconColor: 'text-blue-600 dark:text-blue-500',
    title: 'O que nos move todo dia',
    body: 'Devolver segurança, confiança e tranquilidade para você e sua família através de diagnósticos precisos, serviços de excelência e comunicação totalmente transparente sem surpresas no bolso, sem enrolação.',
  },
  {
    icon: Eye,
    label: 'Visão',
    accentColor: 'border-blue-600 dark:border-blue-500',
    iconBg: 'bg-blue-100 dark:bg-blue-500/10',
    iconColor: 'text-blue-600 dark:text-blue-500',
    title: 'Para onde estamos indo',
    body: 'Ser a oficina de referência da região para carros populares e importados, reconhecida pela inovação em diagnósticos eletrônicos e por ser a primeira escolha das famílias que valorizam qualidade real.',
  },
  {
    icon: Heart,
    label: 'Valores',
    accentColor: 'border-red-500',
    iconBg: 'bg-red-100 dark:bg-red-500/10',
    iconColor: 'text-red-600 dark:text-red-500',
    title: 'Princípios inegociáveis',
    body: null,
    values: [
      { icon: ThumbsUp,       text: 'Honestidade acima de tudo' },
      { icon: Zap,            text: 'Precisão e agilidade no diagnóstico' },
      { icon: Users,          text: 'Respeito ao cliente e ao seu patrimônio' },
      { icon: Leaf,           text: 'Responsabilidade ambiental' },
      { icon: Award,          text: 'Busca constante por inovação' },
      { icon: HandshakeIcon,  text: 'Compromisso com o que foi combinado' },
    ],
  },
];

const steps = [
  {
    num: '01',
    icon: Users,
    title: 'Chegada & Recepção',
    desc: 'Recepção amigável e escuta atenta. Você conta o que sentiu e nós registramos tudo para não perder nenhum detalhe.',
  },
  {
    num: '02',
    icon: Wrench,
    title: 'Diagnóstico',
    desc: 'Usamos equipamentos eletrônicos de última geração para identificar a causa raiz — não apenas o sintoma.',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Orçamento Transparente',
    desc: 'Apresentamos cada item: peça, serviço e valor. Você aprova o que quiser. Sem surpresas na hora de pagar.',
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'Execução & Entrega',
    desc: 'Peças de qualidade, execução rigorosa e teste completo antes de você sair com o carro. Saída com garantia.',
    highlight: true,
  },
];

const stats = [
  { value: '30', label: 'Anos de experiência' },
  { value: '500+', label: 'Clientes satisfeitos' },
  { value: '90d', label: 'De garantia em todos os serviços' },
  { value: '100%', label: 'Transparência no orçamento' },
];

export function About() {
  return (
    <div className="overflow-x-hidden">

      <div
        className="relative flex flex-col items-center justify-center py-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: `url('/src/assets/img/serviços.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <img
            src={logo}
            alt="Logo Jcar Mecânica"
            className="h-24 w-auto object-contain mb-6 drop-shadow-2xl"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Jcar Mecânica<br />
            <span className="text-blue-400">Automotiva</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-xl">
            Tradição, confiança e experiência automotiva para cuidar do que importa para você.
          </p>
        </div>
      </div>

      <div className="bg-zinc-50 dark:bg-zinc-950 py-10 px-4 border-y border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400">{s.value}</span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl space-y-24">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500 mb-3">
              Nossa história
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-6 leading-snug">
              Mecânica que vai além<br />do motor
            </h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                A Jcar nasceu com um propósito claro: mudar a visão de que mecânica precisa ser algo complicado. Nossa missão sempre foi entregar confiança, transparência e segurança para você e sua família.
              </p>
              <p>
                Acreditamos que um bom atendimento vai muito além de consertar veículos. Por isso, trabalhamos com dedicação, honestidade e atenção em cada detalhe, oferecendo um serviço de qualidade e construindo relações duradouras com nossos clientes. Aqui, cada pessoa é atendida com respeito, clareza e o compromisso de encontrar a melhor solução para o seu veículo.
              </p>
              <p>
                Aqui você sempre sabe o que está sendo feito, por quê, e quanto vai custar. Antes de começar.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
              <Star className="h-10 w-10 mb-4 text-blue-200" />
              <blockquote className="text-xl font-semibold leading-snug mb-4">
                "Não consertamos só carros devolvemos segurança para quem você ama."
              </blockquote>
              <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">
                — Jefferson, Fundador
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-zinc-200 dark:bg-zinc-800 rounded-2xl -z-10" />
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500 mb-3">
              Nossos pilares
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
              Missão, Visão & Valores
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Não são palavras em uma parede. São os compromissos que guiam cada decisão dentro da nossa oficina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mvv.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 border-t-4 ${item.accentColor} p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col gap-5`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`${item.iconBg} p-3 rounded-xl`}>
                      <Icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${item.iconColor}`}>
                      {item.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100 leading-tight">
                    {item.title}
                  </h3>
                  {item.body && (
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow">
                      {item.body}
                    </p>
                  )}
                  {item.values && (
                    <ul className="space-y-3 flex-grow">
                      {item.values.map((v, i) => {
                        const VIcon = v.icon;
                        return (
                          <li key={i} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                            <VIcon className={`h-4 w-4 ${item.iconColor} shrink-0`} />
                            {v.text}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row items-center md:items-stretch">
            <div className="md:w-72 shrink-0 flex items-center justify-center p-8 md:p-0 bg-zinc-50 dark:bg-zinc-900">
              <img
                src={fotoDono}
                alt="Jefferson, fundador da Jcar"
                className="w-48 h-48 md:w-full md:h-full object-cover rounded-2xl md:rounded-none shadow-xl"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12 gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Fundador & Mecânico Chefe
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-snug text-zinc-900 dark:text-white">
                Conheça Jefferson
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-prose">
                Com mais de 30 anos de experiência no ramo automotivo, Jefferson construiu sua trajetória baseada em dedicação, confiança e paixão pelo que faz. Ao longo dos anos, se tornou referência pelo atendimento transparente, pela atenção aos detalhes e pelo compromisso em entregar sempre o melhor serviço para cada cliente.

                Antes de fundar a Jcar, Jefferson já atuava há 7 anos no mesmo endereço onde hoje está localizada a oficina. Depois de conquistar a confiança da comunidade e construir uma relação sólida com seus clientes, realizou o sonho de assumir o próprio espaço e transformar o local em uma oficina com identidade própria, atendimento humanizado e foco total na qualidade.

                Hoje, a Jcar carrega não apenas experiência técnica, mas também a história de alguém que dedicou a vida à profissão e acredita que confiança é a base de qualquer serviço bem feito.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {['Especialista em Injeção Eletrônica', 'Importados & Populares', 'Diagnóstico Avançado'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500 mb-3">
              Processo
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
              Como Trabalhamos
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Um processo pensado para que você tenha clareza, controle e tranquilidade em cada etapa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const SIcon = step.icon;
              return (
                <div
                  key={step.num}
                  className={`relative rounded-2xl p-7 flex flex-col gap-4 border transition-shadow hover:shadow-lg ${
                    step.highlight
                      ? 'bg-blue-600 border-blue-600 text-white shadow-blue-200 dark:shadow-blue-900'
                      : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
                  }`}
                >
                  <span className={`absolute top-5 right-6 text-5xl font-extrabold leading-none select-none ${step.highlight ? 'text-blue-400/40' : 'text-zinc-100 dark:text-zinc-800'}`}>
                    {step.num}
                  </span>
                  <div className={`${step.highlight ? 'bg-blue-500/30' : 'bg-blue-100 dark:bg-zinc-800'} p-3 rounded-xl w-fit`}>
                    <SIcon className={`h-6 w-6 ${step.highlight ? 'text-white' : 'text-blue-600 dark:text-blue-500'}`} />
                  </div>
                  <h4 className={`font-bold text-lg leading-tight ${step.highlight ? 'text-white' : 'text-zinc-900 dark:text-zinc-100'}`}>
                    {step.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${step.highlight ? 'text-blue-100' : 'text-zinc-600 dark:text-zinc-400'}`}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="relative bg-zinc-50 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl px-8 py-16 text-center border border-zinc-200 dark:border-zinc-800">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-blue-200 dark:border-blue-500/30">
              <Clock className="h-4 w-4" />
              Atendimento rápido e personalizado
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white leading-snug">
              Pronto para dar o melhor<br />cuidado ao seu veículo?
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Agende agora pelo WhatsApp e receba um diagnóstico detalhado com total transparência.
            </p>

            <a
              href="https://wa.me/5511961091591?text=Olá! Gostaria de agendar uma avaliação para o meu veículo."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-bold bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-xl transition-colors inline-flex items-center justify-center gap-3 text-lg"
            >
              Falar com um Mecânico no WhatsApp
            </a>
            <p className="text-zinc-500 dark:text-zinc-500 text-sm">
              Sem compromisso. Orçamento gratuito e sem surpresas.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}