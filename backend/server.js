import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import logger from './middleware/logger.js';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 3307;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/api/categories', async (req, res) => {
  try {
    const categories = await prisma.categories.findMany();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener categorías' });
  }
});

app.get('/api/getFoods', async (req, res) => {
  try {
    const foods = await prisma.foods.findMany({
      include: {
        category: true
      }
    });

    const formattedFoods = foods.map(f => ({
      id_food: f.id_food,
      name: f.name,
      price: f.price,
      description: f.description,
      image_url: f.image_url,
      id_category: f.id_category,
      pais: f.pais,
      name_category: f.category.name_category,
      name_country: f.pais
    }));

    res.json(formattedFoods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener platos' });
  }
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
