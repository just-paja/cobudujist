import React, { PropTypes } from 'react';

import { Well } from 'react-bootstrap';

import Ingredient from './Ingredient';
import styles from './RecipeIngredients.css';

const RecipeIngredients = ({ ingredients }) => (
  <Well>
    <ul className={styles.ingredientList}>
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
