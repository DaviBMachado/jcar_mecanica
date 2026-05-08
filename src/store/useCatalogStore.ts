import { create } from 'zustand';
import catalogData from '../data/catalog.json';

// Definindo a tipagem (TypeScript) baseada no nosso JSON
interface Service {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
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
  
  // Função que retorna os serviços filtrados com base no que o usuário digitou
  filteredServices: () => {
    const { services, searchQuery } = get();
    if (!searchQuery) return services;
    
    const queryLower = searchQuery.toLowerCase();
    return services.filter(service => 
      service.titulo.toLowerCase().includes(queryLower) || 
      service.descricao.toLowerCase().includes(queryLower)
    );
  }
}));