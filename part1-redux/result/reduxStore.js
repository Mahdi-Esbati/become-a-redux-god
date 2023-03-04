let state = null;

let currentReducer = null;
const listeners = [];

function notifyChanges() {
  listeners.forEach((listener) => listener(state));
}

function dispatch(action) {
  const newState = currentReducer(state, action);
  state = newState;
  notifyChanges();
}

function getState() {
  return state;
}

function subscribe(callback) {
  listeners.push(callback);
}

function unsubscribe(callback) {
  const index = listeners.indexOf(callback);
  listeners.splice(index, 1);
}

function replaceReducer(reducer) {
  currentReducer = reducer;
}

function createStore(reducer, initialState) {
  currentReducer = reducer;
  state = initialState;

  return { dispatch, getState, subscribe, unsubscribe, replaceReducer };
}

export default { createStore };
