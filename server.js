import express, { static as expressStatic, json } from 'express'; // Import static as expressStatic
import { connect } from 'mongoose';
import { join } from 'path';
import userRoutes from './routes/userRoutes.js';
import ingredientRoutes from './routes/ingredientRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connect('mongodb://0.0.0.0:27017/recipeApp', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

// Serve static files from the Vite build
app.use(expressStatic(join(__dirname, 'frontend', 'dist'))); // Use expressStatic instead of static

// Use JSON middleware
app.use(json());

// Mount the routes
app.use('/api/users', userRoutes);
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/recipes', recipeRoutes);

// ... (existing code)

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
