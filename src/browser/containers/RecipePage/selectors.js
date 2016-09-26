import { createSelector } from 'reselect';

const selectRecipeDetail = () => createSelector(
  state => state.recipe,
  recipe => ({ detail: recipe.detail.recipe }),
);

export default {
  selectRecipeDetail,
};
