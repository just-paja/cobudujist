import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const RecipeLink = ({ recipeName, recipeId }) => (
  <Link to={`/recipe/${recipeId}`}>{recipeName}</Link>
);

RecipeLink.propTypes = {
  recipeId: PropTypes.number.isRequired,
  recipeName: PropTypes.string.isRequired,
};

export default RecipeLink;
