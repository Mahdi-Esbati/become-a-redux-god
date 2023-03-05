export function createStore(reducer, initialState) {
  let currentReducer = reducer;
  let currentState = initialState;
  const listeners = [];

  function notifyChanges() {
    listeners.forEach((listener) => listener(currentState));
  }

  function dispatch(action) {
    const newState = currentReducer(currentState, action);
    currentState = newState;
    notifyChanges();
  }

  function getState() {
    return currentState;
  }

  function subscribe(callback) {
    listeners.push(callback);

    return function unsubscribe() {
      const index = listeners.indexOf(callback);
      listeners.splice(index, 1);
    };
  }

  function replaceReducer(reducer) {
    currentReducer = reducer;
  }

  return { dispatch, getState, subscribe, replaceReducer };
}
