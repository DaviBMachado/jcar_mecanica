import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCatalogStore } from '../store/useCatalogStore';
import { Search, PenTool, AlertTriangle, CheckCircle, ShieldCheck } from 'lucide-react';

export function Services() {
  const { searchQuery, setSearchQuery, filteredServices } = useCatalogStore();
  const services = filteredServices();
  const location = useLocation();

  // Efeito que detecta a #URL e rola até o card específico ao carregar a página
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150); // Timeout leve apenas para aguardar a DOM terminar de pintar
      }
    }
  }, [location]);

  const diferenciais = [
    "Agendamento personalizado",
    "Equipamentos completos",
    "Experiência com carros importados (Volvo, BMW, Mercedes, entre outros)",
    "Experiência com carros populares",
    "Transparência de trabalho"
  ];

  const groupedServices = services.reduce((acumulador, service) => {
    if (!acumulador[service.categoria]) {
      acumulador[service.categoria] = [];
    }
    acumulador[service.categoria].push(service);
    return acumulador;
  }, {} as Record<string, typeof services>);

  return (
    <div className="container mx-auto px-4 py-12">
      
      {/* CABEÇALHO HERO COM IMAGEM DE FUNDO */}
      <div 
        className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center py-24 px-6 text-center"
        style={{ 
          backgroundImage: `url('/src/assets/img/serviços.jpeg')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Nossos Serviços
          </h1>
          <p className="text-lg text-zinc-200 mb-10">
            Encontre o serviço ideal para o seu veículo. Realizamos manutenções preventivas e corretivas com equipamentos de ponta e transparência total.
          </p>
          
          <div className="relative w-full max-w-lg border-none shadow-xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 border border-transparent rounded-xl leading-5 bg-white/95 backdrop-blur-sm text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-4 focus:ring-green-500/50 sm:text-base transition-all"
              placeholder="Buscar serviço..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* RENDERIZAÇÃO DOS SERVIÇOS AGRUPADOS */}
      {services.length > 0 ? (
        <div className="mb-20">
          {Object.entries(groupedServices).map(([categoria, servicosDaCategoria]) => (
            <div key={categoria} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-3 flex items-center gap-2">
                <span className="bg-green-500 w-2 h-6 rounded-full inline-block"></span>
                {categoria}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicosDaCategoria.map((service) => (
                  <div 
                    id={service.id} // <-- ID adicionado aqui!
                    key={service.id} 
                    className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col scroll-mt-32" // <-- scroll-mt-32 garante margem do header
                  >
                    <div className="flex flex-col items-center text-center mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                      <h3 className="text-xl font-bold mt-2">{service.titulo}</h3>
                    </div>
                    
                    <div className="text-left flex-grow">
                      {service.descricao && (
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                          {service.descricao}
                        </p>
                      )}
                      {service.sintomaComum && (
                        <div className="mb-3 text-sm">
                          <span className="font-semibold text-zinc-800 dark:text-zinc-200">Sintomas: </span>
                          <span className="text-zinc-600 dark:text-zinc-400">{service.sintomaComum}</span>
                        </div>
                      )}
                      {service.causaProvavel && (
                        <div className="mb-4 text-sm">
                          <span className="font-semibold text-zinc-800 dark:text-zinc-200">Causa: </span>
                          <span className="text-zinc-600 dark:text-zinc-400">{service.causaProvavel}</span>
                        </div>
                      )}
                      {service.alerta && (
                        <div className="mb-6 mt-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 p-3 rounded-lg flex items-start gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-red-700 dark:text-red-400">
                            <span className="font-bold">Alerta:</span> {service.alerta}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-auto pt-4 w-full flex justify-center">
                      <a 
                        href={`https://wa.me/5511956860202?text=${encodeURIComponent(`Olá, gostaria de agendar uma avaliação para o serviço de ${service.titulo}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 dark:text-green-500 font-bold hover:underline text-sm text-center"
                      >
                        Agendar serviço
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 mb-20">
          <PenTool className="h-12 w-12 text-zinc-400 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">Nenhum serviço encontrado</h3>
          <p className="text-zinc-500">Não achamos nenhum resultado para "{searchQuery}".</p>
          <button 
            onClick={() => setSearchQuery('')}
            className="mt-4 text-green-500 hover:underline font-medium"
          >
            Limpar busca
          </button>
        </div>
      )}

      {/* SEÇÃO: NOSSA ESTRUTURA (GALERIA DE IMAGENS) */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Nossa Estrutura e Trabalho</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Tratamos o seu veículo com o máximo de cuidado. Veja um pouco do nosso dia a dia e da nossa paixão por mecânica automotiva.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800 group">
            <img 
              src="/src/assets/img/servicos_v2.jpeg" 
              alt="Mercedes com capô aberto" 
              className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800 group">
            <img 
              src="/src/assets/img/servicos_v4.jpeg" 
              alt="Mecânico retirando motor do carro" 
              className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800 group">
            <img 
              src="/src/assets/img/servicos_v3.jpeg" 
              alt="Motor limpo e retificado" 
              className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO: DIFERENCIAIS */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Diferenciais</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {diferenciais.map((diferencial, index) => (
            <div key={index} className="flex items-center justify-center text-center gap-3 bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
              <span className="font-medium text-zinc-800 dark:text-zinc-200">{diferencial}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://wa.me/5511956860202?text=Olá! Gostaria de fazer um agendamento personalizado." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
          >
            Fazer Agendamento Personalizado
          </a>
        </div>
      </section>

      {/* SEÇÃO: GARANTIA */}
      <section className="bg-zinc-900 dark:bg-zinc-800 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6 shadow-xl">
        <div className="bg-zinc-800 dark:bg-zinc-700 p-4 rounded-full flex-shrink-0">
          <ShieldCheck className="h-12 w-12 text-green-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2">Garantia</h2>
          <p className="text-zinc-300 text-lg">
            Todos os nossos serviços contam com <span className="font-bold text-green-400">90 dias de garantia</span>.
          </p>
        </div>
      </section>

    </div>
  );
}