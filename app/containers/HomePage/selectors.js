import { createSelector } from 'reselect';

const selectRecipeHint = () => createSelector(
  state => state.recipe,
  recipe => ({
    hint: recipe.hint.recipe,
    hintLoading: recipe.hint.loading,
  }),
);

export {
  selectRecipeHint,
};
