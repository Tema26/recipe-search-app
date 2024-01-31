import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Recipes.css';

type RecipeType = {
  id: number,
  title: string,
  ingredients: string[],
  instructions: string
}

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data }: { data: RecipeType[] } = await axios.get("http://localhost:8080/api/recipes/");
        setRecipes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <table className="recipe-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Ingredients</th>
            <th>Instructions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.title}</td>
              <td>{recipe.ingredients.join(', ')}</td>
              <td>{recipe.instructions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Recipes;
