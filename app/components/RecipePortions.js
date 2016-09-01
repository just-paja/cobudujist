import FontAwesome from 'react-fontawesome';
import React, { PropTypes } from 'react';

import { defineMessages, FormattedMessage } from 'react-intl';

export const messages = defineMessages({
  portions: {
    id: 'app.recipe.portions',
    defaultMessage: 'Počet porcí',
  },
});

const RecipePortions = ({ portions }) => (
  <div>
    <FontAwesome name="users" />
    {' '}
    <FormattedMessage {...messages.portions} />:
    {' '}
    {portions}
  </div>
);

RecipePortions.propTypes = {
  portions: PropTypes.number.isRequired,
};

export default RecipePortions;
