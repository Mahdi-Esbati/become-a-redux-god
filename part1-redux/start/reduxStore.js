let state = null;

let currentReducer = null;
const listeners = [];

function notifyChanges() {}

function dispatch(action) {}

function getState() {}

function subscribe(callback) {}

function unsubscribe(callback) {}

function replaceReducer(reducer) {}

function createStore(reducer, initialState) {
  return { dispatch, getState, subscribe, unsubscribe, replaceReducer };
}

export default { createStore };
