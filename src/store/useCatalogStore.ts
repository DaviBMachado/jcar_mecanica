import { create } from 'zustand';
import catalogData from '../data/catalog.json';

// Atualizamos a tipagem para abraçar todos os campos possíveis do seu JSON
interface Service {
  id: string;
  titulo: string;
  categoria: string;
  descricao?: string;      // O "?" diz que esse campo é opcional
  sintomaComum?: string;   // Novos campos mapeados
  causaProvavel?: string;
  alerta?: string;
}

interface CatalogStore {
  services: Service[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredServices: () => Service[];
}

export const useCatalogStore = create<CatalogStore>((set, get) => ({
  services: catalogData,
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  filteredServices: () => {
    const { services, searchQuery } = get();
    if (!searchQuery) return services;
    
    const queryLower = searchQuery.toLowerCase();
    return services.filter(service => 
      service.titulo.toLowerCase().includes(queryLower) || 
      (service.descricao && service.descricao.toLowerCase().includes(queryLower)) ||
      (service.sintomaComum && service.sintomaComum.toLowerCase().includes(queryLower))
    );
  }
}));