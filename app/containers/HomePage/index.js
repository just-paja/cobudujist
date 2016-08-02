import * as constants from '../../constants/actions';
import React, { Component, PropTypes } from 'react';
import RecipeLink from '../../components/RecipeLink';
import messages from './messages';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { selectRecipeHint } from './selectors';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: constants.HOME_PAGE_RENDERED });
  }

  render() {
    const { recipeHint } = this.props;

    return (
      <h1>
        <FormattedMessage {...messages.header} />
        {recipeHint ? (
          <RecipeLink
            invitation={messages.recipe}
            recipeId={recipeHint.id}
            recipeName={recipeHint.name}
          />
        ) : null}
      </h1>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  recipeHint: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

export default connect(selectRecipeHint)(HomePage);
