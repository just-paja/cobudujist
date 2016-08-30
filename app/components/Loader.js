import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const Loader = ({ children, loading }) => (
  <div>
    {loading ?
      (<FontAwesome name="spinner" spin />) :
      children}
  </div>
);

Loader.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Loader;
