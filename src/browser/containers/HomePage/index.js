import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Well } from 'react-bootstrap';

import RecipeHint from '../../components/RecipeHint';
import RecipeLink from '../../components/RecipeLink';
import messages from './messages';

import { selectRecipeHint } from './selectors';

import * as constants from '../../constants/actions';


class HomePage extends Component {
  componentWillMount() {
    this.props.dispatch({ type: constants.HOME_PAGE_RENDERED });
  }

  render() {
    const { dispatch, hint, hintLoading } = this.props;

    return (
      <div>
        <h1><FormattedMessage {...messages.quickChoice} /></h1>
        <Well bsSize="large" className="text-center">
          {hint ? (
            <RecipeHint
              loading={hintLoading}
              onRefresh={() => dispatch({ type: constants.RECIPE_HINT_REFRESH })}
            >
              <h2>
                <RecipeLink
                  invitation={messages.recipe}
                  recipeId={hint.id}
                  recipeName={hint.name}
                />
              </h2>
            </RecipeHint>
          ) : null}
        </Well>
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
