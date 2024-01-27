import  { useState, useEffect } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState<any[]>([]); // Use 'any' as the type
  const [error, setError] = useState<string | null>(null); // Adjust the error type

  useEffect(() => {
    fetch('/api/recipes')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch recipes. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched recipes:', data);
        setRecipes(data);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setError(error.message || 'An error occurred while fetching recipes.');
      });
  }, []);

  return (
    <div>
      <h2>All Recipes</h2>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.instructions}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
