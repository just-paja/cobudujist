import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RecipeDetail from '../../components/RecipeDetail';
import * as constants from '../../constants/actions';
import { selectRecipeDetail } from './selectors';

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
