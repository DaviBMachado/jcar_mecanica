import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.PLACE_ID;
const OUTPUT_PATH = path.join(__dirname, '../src/data/reviews.json');

async function fetchGoogleReviews() {
  if (!API_KEY || !PLACE_ID) {
    console.warn('Chaves do Google Places não encontradas. Criando arquivo JSON de fallback...');
    criarFallback();
    return;
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}&language=pt-BR`;

  try {
    console.log('Buscando reviews do Google Places...');
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK' && data.result.reviews) {
      const bestReviews = data.result.reviews.filter(review => review.rating >= 4);
      
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify(bestReviews, null, 2));
      console.log('Reviews salvos com sucesso em src/data/reviews.json!');
    } else {
      console.error('Erro na API do Google:', data.status);
      criarFallback();
    }
  } catch (error) {
    console.error('Falha na requisição:', error);
    criarFallback();
  }
}


function criarFallback() {
  const fallbackData = [
    {
      author_name: "Cliente Teste",
      rating: 5,
      text: "Oficina excelente! Resolveram o problema de injeção do meu carro super rápido.",
      relative_time_description: "há uma semana"
    }
  ];
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(fallbackData, null, 2));
  console.log('Arquivo de fallback (reviews.json) criado para desenvolvimento.');
}

fetchGoogleReviews();