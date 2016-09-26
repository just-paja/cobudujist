import FontAwesome from 'react-fontawesome';
import React, { PropTypes } from 'react';

import { defineMessages, FormattedMessage } from 'react-intl';

export const messages = defineMessages({
  duration: {
    id: 'app.recipe.duration',
    defaultMessage: 'Čas přípravy',
  },
});

const RecipeDuration = ({ duration }) => (
  <div>
    <FontAwesome name="clock-o" />
    {' '}
    <FormattedMessage {...messages.duration} />:
    {' '}
    {duration} min
  </div>
);

RecipeDuration.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default RecipeDuration;
