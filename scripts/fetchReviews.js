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
  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;

  try {
    console.log('Buscando reviews do Google Places (v1)...');

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'reviews,displayName,rating'
      }
    });

    const data = await response.json();
    if (data.reviews && data.reviews.length > 0) {
      const bestReviews = data.reviews.filter(review => review.rating >= 4);
      const formattedReviews = bestReviews.map(review => ({
        author_name: review.authorAttribution?.displayName || "Cliente",
        rating: review.rating,
        text: review.text?.text || review.originalText?.text || "",
        relative_time_description: review.relativePublishTimeDescription || ""
      }));

      fs.writeFileSync(OUTPUT_PATH, JSON.stringify(formattedReviews, null, 2));
      console.log('Reviews salvos com sucesso em src/data/reviews.json!');
    } else {
      console.error('Nenhum review encontrado ou erro na resposta:', data);
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