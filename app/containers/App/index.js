/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import Footer from '../../components/Footer';
import messages from './messages';
import styles from './styles.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
        <Footer
          about={messages.about}
          home={messages.home}
        />
      </div>
    );
  }
}
