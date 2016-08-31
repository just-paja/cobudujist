import * as constants from '../../constants/actions';
import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { selectRecipeDetail } from './selectors';

import RecipeDetail from '../../components/RecipeDetail';

class RecipePage extends Component {
  componentWillMount() {
    this.props.dispatch({
      type: constants.RECIPE_DETAIL_ENTERED,
      recipe: this.props.params.recipe,
    });
  }

  render() {
    const { detail } = this.props;

    return (
      <div>
        {detail ? <RecipeDetail {...detail} /> : null}
      </div>
    );
  }
}

RecipePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  detail: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    steps: PropTypes.string,
  }),
  params: PropTypes.shape({ recipe: PropTypes.string }).isRequired,
};

export default connect(selectRecipeDetail)(RecipePage);
