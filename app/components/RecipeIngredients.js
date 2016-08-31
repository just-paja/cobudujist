import React, { PropTypes } from 'react';

import { Well } from 'react-bootstrap';

import Ingredient from './Ingredient';

const RecipeIngredients = ({ ingredients }) => (
  <Well>
    <ul>
      {ingredients.map(ingredient => (
        <li key={ingredient.id}>
          <Ingredient {...ingredient} />
        </li>
      ))}
    </ul>
  </Well>
);

RecipeIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeIngredients;
