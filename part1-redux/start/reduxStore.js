export function createStore(reducer, initialState) {
  function notifyChanges() {}

  function dispatch(action) {}

  function getState() {}

  function subscribe(callback) {}

  function replaceReducer(reducer) {}

  return { dispatch, getState, subscribe, replaceReducer };
}
