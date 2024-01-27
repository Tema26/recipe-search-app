// src/types.ts
export interface Ingredient {
    _id: string;
    name: string;
    category: string;
  }

  export interface Recipe {
    _id: string;
    title: string;
    ingredients: Ingredient[];
    instructions: string;
  }
