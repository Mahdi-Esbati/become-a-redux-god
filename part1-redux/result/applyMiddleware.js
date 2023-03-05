function compose(...funcs) {
  return funcs.reduceRight((composed, f) => f(composed));
}

const applyMiddleware =
  (...middlewares) =>
  (createStore) =>
  (reducer, preloadedState) => {
    const store = createStore(reducer, preloadedState);
    const chain = middlewares.map((middleware) => middleware(store));
    const dispatch = compose(...chain)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  };

export default applyMiddleware;
