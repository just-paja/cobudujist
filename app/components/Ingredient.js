import React, { PropTypes } from 'react';

import { Col, Row } from 'react-bootstrap';

const Ingredient = ({ amount, id }) => (
  <Row>
    <Col xs={3}>{amount}</Col>
    <Col xs={9}>{id}</Col>
  </Row>
);

Ingredient.propTypes = {
  amount: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Ingredient;
