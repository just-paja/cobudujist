import React, { PropTypes } from 'react';

import Ingredient from './Ingredient';
import WellList from './WellList';

const RecipeIngredients = ({ ingredients }) => (
  <WellList>
    {ingredients.map(ingredient => (
      <li key={ingredient.id}>
        <Ingredient {...ingredient} />
      </li>
    ))}
  </WellList>
);

RecipeIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeIngredients;
