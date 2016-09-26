/**
 * Test store addons
 */
import { expect } from 'chai';
import { browserHistory } from 'react-router';

import configureStore from '../store';

describe('configureStore', () => {
  let store;

  before(() => {
    store = configureStore({}, browserHistory);
  });

  describe('asyncReducers', () => {
    it('should contain an object for async reducers', () => {
      expect(typeof store.asyncReducers).to.equal('object');
    });
  });

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).to.equal('function');
    });
  });
});
