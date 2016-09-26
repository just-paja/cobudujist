import { expect } from 'chai';

import { selectLocationState } from '../containers/App/selectors';

describe('Homepage selectors', () => {
  it('selectLocationState should select the route as a plain JS object', () => {
    const route = { locationBeforeTransitions: null };
    const mockedState = { route };
    expect(selectLocationState()(mockedState)).to.equal(route);
  });
});
