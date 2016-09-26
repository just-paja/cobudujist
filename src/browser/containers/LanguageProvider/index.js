/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import { selectLocale } from './selectors';

// eslint-disable-next-line react/prefer-stateless-function
export class LanguageProvider extends React.Component {
  render() {
    return (
      <IntlProvider
        defaultLocale="cs"
        locale={this.props.locale}
        messages={this.props.messages[this.props.locale]}
      >
        {this.props.children}
      </IntlProvider>
    );
  }
}

LanguageProvider.propTypes = {
  locale: React.PropTypes.string,
  messages: React.PropTypes.object,
  children: React.PropTypes.element.isRequired,
};


const mapStateToProps = createSelector(
  selectLocale(),
  locale => ({ locale })
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
