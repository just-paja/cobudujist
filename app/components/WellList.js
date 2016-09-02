import React, { PropTypes } from 'react';

import { Well } from 'react-bootstrap';

import styles from './WellList.css';

const WellList = ({ children }) => (
  <Well>
    <ul className={styles.list}>
      {children}
    </ul>
  </Well>
);

WellList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default WellList;
