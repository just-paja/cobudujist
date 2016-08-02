import { createSelector } from 'reselect';

const selectRecipeHint = () => createSelector(
  state => (state.home.recipeHint ? state.home.recipeHint.recipe : null),
  recipeHint => ({ recipeHint }),
);

export {
  selectRecipeHint,
};
