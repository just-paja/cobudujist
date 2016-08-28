import React, { PropTypes } from 'react';

const RecipeDetail = ({ id, name }) => (
  <div>
    <h1>{name}</h1>
    {id}
  </div>
);

RecipeDetail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default RecipeDetail;
