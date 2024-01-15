<<<<<<< HEAD
# Culinary Companion

Culinary Companion is a web application that helps users find recipes based on available ingredients. Whether you're looking to cook with what's in your pantry or create a shopping list, Culinary Companion has got you covered.

## Features

- Search for recipes based on ingredients.
- Save your favorite recipes.
- Create and manage shopping lists.

## Technologies Used

- Frontend: React
- Backend: Node.js with Express
- Database: MongoDB
- External API: Edamam API for recipe data

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/culinary-companion.git
   cd culinary-companion

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

2. Set up the MongoDB database. [Instructions here]
3. Start the backend server:
cd backend
npm start

4. Start the frontend:

cd frontend
npm start

Open your browser and navigate to http://localhost:3000.

Contributing

If you'd like to contribute to this project, please follow the Contributing Guidelines.

License

This project is licensed under the MIT License.
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
>>>>>>> 2e189e3 (add vite to project)
