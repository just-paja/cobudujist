import fetch from 'isomorphic-fetch';

export const fetchRandomRecipe = () => fetch('/api/recipe/random');
