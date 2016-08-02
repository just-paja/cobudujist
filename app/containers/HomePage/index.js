import * as constants from '../../constants/actions';
import React, { Component, PropTypes } from 'react';
import messages from './messages';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: constants.HOME_PAGE_RENDERED });
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
  dispatch: PropTypes.func.isRequired,
};

export default connect()(HomePage);
