import React, { Component, PropTypes } from 'react';
import messages from './messages';

import { FormattedMessage } from 'react-intl';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchRandomRecipe();
  }

  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}

HomePage.propTypes = {
  fetchRandomRecipe: PropTypes.func.isRequired,
};

export default HomePage;
