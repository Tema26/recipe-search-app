import express from 'express';
import http from 'http';
import Recipes from './db/models/Recipes.js';
import { connectToDb } from './db/index.js';
import mongoose from 'mongoose';
const hostname = 'localhost';
const port = 8080;
const app = express();
import cors from 'cors';

app.use(cors());

async function main() {
   try {
      await mongoose.connect('mongodb://0.0.0.0:27017/recipeApp');
      const sample_server = http.createServer(app);
      sample_server.listen(port, hostname, () => {
         console.log(`Server running at http: //${hostname}:${port}/`);
      });
      console.log('Сервер ожидает подключения...');
   } catch (err) {
      return console.log(err);
   }
}

app.get('/api/recipes', async (req, res) => {
   const recipes = await Recipes.find({}).select('-_id').exec();
   res.send(recipes);
});

main();
