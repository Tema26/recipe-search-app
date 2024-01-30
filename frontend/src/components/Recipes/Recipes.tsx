import React, { useEffect, useState } from 'react';
import axios from 'axios';

type RecipeType = {
  id: number,
  title: string,
  ingredients: string[],
  instructions: string
}

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data}: {data: RecipeType[]} = await axios.get("http://localhost:8080/api/recipes/");
        setRecipes(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])
  return (
    <div className="App">
      {recipes.map((recipe) => (
        <p key={recipe.id}>{recipe.title}</p>
      ))}
    </div>
  );
}

export default Recipes;
