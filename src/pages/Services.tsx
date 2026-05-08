import { useCatalogStore } from '../store/useCatalogStore';
import { Search, PenTool } from 'lucide-react';

export function Services() {
  const { searchQuery, setSearchQuery, filteredServices } = useCatalogStore();
  const services = filteredServices();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 md:flex md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Encontre o serviço ideal para o seu veículo. Realizamos manutenções preventivas e corretivas com equipamentos de ponta.
          </p>
        </div>
        
        {/* Barra de Busca controlada pelo Zustand */}
        <div className="mt-6 md:mt-0 relative w-full md:w-72 border-none">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg leading-5 bg-white dark:bg-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition-colors"
            placeholder="Buscar serviço..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Grid de Serviços ou Empty State */}
      {services.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-md transition-shadow">
              <span className="text-xs font-semibold px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full mb-4 inline-block">
                {service.categoria}
              </span>
              <h3 className="text-xl font-bold mb-2">{service.titulo}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">{service.descricao}</p>
              <a 
                href={`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre o serviço de ${service.titulo}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-500 font-medium hover:underline text-sm flex items-center gap-1"
              >
                Agendar serviço
              </a>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700">
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
    </div>
  );
}