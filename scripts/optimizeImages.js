import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './src/assets';
const outputDir = './public/images';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(png|jpe?g)$/i)) {
    const outputName = file.replace(/\.(png|jpe?g)$/i, '.webp');
    sharp(path.join(inputDir, file))
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, outputName))
      .then(() => console.log(`Convertido: ${outputName}`))
      .catch(err => console.error(`Erro em ${file}:`, err));
  }
});