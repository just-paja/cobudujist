import React, { PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

const RecipeLink = ({ invitation, recipeName, recipeId }) => (
  <div>
    <FormattedMessage {...invitation} />
    {' '}
    <Link to={`/recipe/${recipeId}`}>{recipeName}</Link>
  </div>
);

RecipeLink.propTypes = {
  recipeId: PropTypes.number.isRequired,
  recipeName: PropTypes.string.isRequired,
  invitation: PropTypes.object.isRequired,
};

export default RecipeLink;
