import fetch from 'isomorphic-fetch';

const apiUrl = 'localhost:3000';
export const getApiUrl = path => `http://${apiUrl}/api${path}`;

export const apiFetch = url => fetch(getApiUrl(url));

export const fetchRecipeRandom = () => apiFetch('/recipe/random');

export const fetchRecipeDetail = recipe => apiFetch(`/recipe/${recipe}`);
