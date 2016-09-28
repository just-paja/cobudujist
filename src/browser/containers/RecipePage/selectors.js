import { createSelector } from 'reselect';

export const selectRecipeDetail = () => createSelector(
  state => state.recipe,
  recipe => ({ detail: recipe.detail.recipe }),
);

export default {
  selectRecipeDetail,
};
