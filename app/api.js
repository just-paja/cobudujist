import fetch from 'isomorphic-fetch';

const apiUrl = 'localhost:3000';
export const getApiUrl = path => `http://${apiUrl}/api${path}`;

export const fetchRandomRecipe = () => fetch(getApiUrl('/recipe/random'));
