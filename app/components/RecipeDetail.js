import Helmet from 'react-helmet';
import Markdown from 'react-markdown';
import React, { PropTypes } from 'react';

import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router';

import RecipeDuration from './RecipeDuration';
import RecipePortions from './RecipePortions';
import RecipeIngredients from './RecipeIngredients';
import WellList from './WellList';

const RecipeDetail = ({ duration, id, ingredients, name, portions, steps }) => (
  <div>
    <Helmet title={name} />
    <h1><Link to={`/recipe/${id}`}>{name}</Link></h1>
    <Row>
      <Col lg={8} sm={6}>
        <h2>Ingredience</h2>
        <RecipeIngredients ingredients={ingredients} />
        <h2>Měli byste vědět</h2>
        <WellList>
          <li><RecipeDuration duration={duration} /></li>
          <li><RecipePortions portions={portions} /></li>
        </WellList>
        <h2>Postup</h2>
        <Markdown source={steps} />
      </Col>
      <Col lg={4} sm={6}>
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
  duration: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  portions: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  steps: PropTypes.string.isRequired,
};

export default RecipeDetail;
