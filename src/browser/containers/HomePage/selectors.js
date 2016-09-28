import { createSelector } from 'reselect';

export const selectRecipeHint = () => createSelector(
  state => state.recipe,
  recipe => ({
    hint: recipe.hint.recipe,
    hintLoading: recipe.hint.loading,
  }),
);

export default {
  selectRecipeHint,
};
