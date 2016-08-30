import React, { PropTypes } from 'react';

import { Button } from 'react-bootstrap';
import { defineMessages, FormattedMessage } from 'react-intl';

import Loader from './Loader';

const messages = defineMessages({
  somethingElse: {
    id: 'app.components.RecipeHint.somethingElse',
    defaultMessage: 'Zkusím něco jiného',
  },
});

const RecipeHint = ({ children, loading, onRefresh }) => (
  <div>
    <Loader loading={loading}>
      {children}
      <Button onClick={onRefresh}>
        <FormattedMessage {...messages.somethingElse} />
      </Button>
    </Loader>
  </div>
);

RecipeHint.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default RecipeHint;
