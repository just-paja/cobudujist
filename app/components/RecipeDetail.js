import Markdown from 'react-markdown';
import React, { PropTypes } from 'react';

import { Col, Image, Row, Well } from 'react-bootstrap';
import { Link } from 'react-router';

const RecipeDetail = ({ id, name, steps }) => (
  <div>
    <h1><Link to={`/recipe/${id}`}>{name}</Link></h1>
    <Row>
      <Col sm={6}>
        <h2>Ingredience</h2>
        <h2>Postup</h2>
        <Well>
          <Markdown source={steps} />
        </Well>
      </Col>
      <Col sm={6}>
        <Image
          src="https://www.toprecepty.cz/fotky/recepty/0081/letni-rychle-rizoto-172738-1920-1080.jpg"
          thumbnail
        />
      </Col>
    </Row>
  </div>
);

RecipeDetail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  steps: PropTypes.string.isRequired,
};

export default RecipeDetail;
