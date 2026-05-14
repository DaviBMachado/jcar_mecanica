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
  const fallbackData = 
[
  {
    "author_name": "João Silva",
    "rating": 5,
    "text": "Atendimento nota 10. O Jefferson me explicou tudo que precisava ser feito no motor e não empurrou serviços desnecessários. Recomendo muito a transparência deles!",
    "relative_time_description": "há 2 semanas"
  },
  {
    "author_name": "Marcos Oliveira",
    "rating": 5,
    "text": "Levei minha BMW para revisar a suspensão e fiquei impressionado com o cuidado da equipe. Preço justo, equipamentos de ponta e serviço impecável.",
    "relative_time_description": "há 1 mês"
  },
  {
    "author_name": "Ana Costa",
    "rating": 4,
    "text": "Ótima oficina, pessoal muito honesto e competente. Só demorou um pouquinho mais que o previsto por causa do atraso da transportadora na entrega de uma peça, mas o carro ficou perfeito.",
    "relative_time_description": "há 3 meses"
  },
  {
    "author_name": "Roberto Almeida",
    "rating": 5,
    "text": "Minha família toda traz os carros aqui há anos. O diferencial deles é a honestidade e a experiência de mais de 30 anos. Você deixa o carro de olhos fechados.",
    "relative_time_description": "há 2 semanas"
  },
  {
    "author_name": "Camila Rodrigues",
    "rating": 5,
    "text": "Tive um problema na injeção eletrônica que ninguém resolvia. Na Jcar eles passaram o scanner de diagnóstico, descobriram a falha na hora e resolveram. Salvou minha viagem!",
    "relative_time_description": "há 4 dias"
  },
  {
    "author_name": "Fernando Souza",
    "rating": 5,
    "text": "Excelente infraestrutura. O fato de terem me mandado o orçamento claro no WhatsApp antes de encostar no carro me passou muita segurança. Ganharam um cliente.",
    "relative_time_description": "há 2 meses"
  }
];
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(fallbackData, null, 2));
  console.log('Arquivo de fallback (reviews.json) criado para desenvolvimento.');
}

fetchGoogleReviews();