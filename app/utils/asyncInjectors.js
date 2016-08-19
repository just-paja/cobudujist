/**
 * Inject an asynchronously loaded saga
 */
export function injectAsyncSagas(store) {
  return (sagas) => sagas.map(store.runSaga);
}

/**
 * Helper for creating injectors
 */
export function getAsyncInjectors(store) {
  return {
    injectSagas: injectAsyncSagas(store),
  };
}
