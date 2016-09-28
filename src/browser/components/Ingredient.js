import classnames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './Ingredient.css';

const Ingredient = ({ amount, ingredientType, unit }) => (
  <div>
    <span className={styles.ingredient}>{ingredientType.name}</span>
    {' '}
    <span className={classnames(styles.amount, 'pull-right')}>{amount} {unit.name}</span>
  </div>
);

Ingredient.propTypes = {
  amount: PropTypes.number.isRequired,
  ingredientType: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  unit: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Ingredient;
