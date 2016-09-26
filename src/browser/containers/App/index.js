import React from 'react';

import { Grid } from 'react-bootstrap';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './styles.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className={styles.container}>
        <Grid>
          <Header />
          {this.props.children}
        </Grid>
        <Footer />
      </div>
    );
  }
}
