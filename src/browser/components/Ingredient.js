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
  id: PropTypes.number.isRequired,
  ingredientType: PropTypes.object.isRequired,
  unit: PropTypes.object.isRequired,
};

export default Ingredient;
