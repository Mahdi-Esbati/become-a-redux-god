// Log in console everytime user dispatches an action
const store = createStore(reducer, {});

// Solution 1
console.log('Dispatching an action');
store.dispatch({ type: 'FOLAN' });
console.log('next state', store.getState());

// Solution 2
function dispatchAndLog(store, action) {
  console.log('Dispatching an action');
  store.dispatch(action);
  console.log('next state', store.getState());
}

// Solution 3
const next = store.dispatch;
store.dispatch = (action) => {
  console.log('Dispatching an action', action);
  const result = next(action);
  console.log('NEXT STATE', store.getState());
  return result;
};

// Solution 4
function patchStoreToAddLogging(store) {
  const next = store.dispatch;
  store.dispatch = (action) => {
    console.log('Dispatching an action', action);
    const result = next(action);
    console.log('NEXT STATE', store.getState());
    return result;
  };
}

function patchStoreToAddReporting(store) {
  const next = store.dispatch;
  store.dispatch = (action) => {
    try {
      return next(action);
    } catch (error) {
      Sentry.report(error);
    }
  };
}

patchStoreToAddLogging(store);
patchStoreToAddReporting(store);

// Solution 5
function logger(store) {
  const next = store.dispatch;
  return function dispatchAndLog(action) {
    console.log('Dispatching an action', action);
    const result = next(action);
    console.log('NEXT STATE', store.getState());
    return result;
  };
}

function applyMiddlewares(store, middlewares) {
  middlewares = middlewares.slice();
  middlewares.forEach((middleware) => (store.dispatch = middleware(store)));
}

applyMiddlewares(store, [logger]);

// Solution 6
const logger = (store) => (next) => {
  return function dispatchAndLog(action) {
    console.log('Dispatching an action', action);
    const result = next(action);
    console.log('NEXT STATE', store.getState());
    return result;
  };
};

function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice();

  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => (dispatch = middleware(store)(dispatch)));
  return { ...store, dispatch };
}
