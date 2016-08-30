import * as constants from '../../constants/actions';
import React, { Component, PropTypes } from 'react';
import RecipeHint from '../../components/RecipeHint';
import RecipeLink from '../../components/RecipeLink';
import messages from './messages';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { selectRecipeHint } from './selectors';

class HomePage extends Component {
  componentWillMount() {
    this.props.dispatch({ type: constants.HOME_PAGE_RENDERED });
  }

  render() {
    const { dispatch, hint, hintLoading } = this.props;

    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        {hint ? (
          <RecipeHint
            loading={hintLoading}
            onRefresh={() => dispatch({ type: constants.RECIPE_HINT_REFRESH })}
          >
            <RecipeLink
              invitation={messages.recipe}
              recipeId={hint.id}
              recipeName={hint.name}
            />
          </RecipeHint>
        ) : null}
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  hint: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  hintLoading: PropTypes.bool.isRequired,
};

export default connect(selectRecipeHint)(HomePage);
