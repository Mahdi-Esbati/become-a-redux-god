import { createStore } from 'redux';
// import { createStore } from './result/reduxStore';
// import { createStore } from './start/reduxStore';

// import applyMiddleware from './result/applyMiddleware';

const displayText = document.getElementById('display');
const subscribeButton = document.getElementById('subscribe');
const unsubscribeButton = document.getElementById('unsubscribe');
const dispatchButton = document.getElementById('dispatch');

const reducer = (state, action) => {
  switch (action.type) {
    case 'TEST':
      return { ...state, folan: action.payload };
    default:
      return state;
  }
};

// const logger = (store) => (next) => (action) => {
//   console.log('dispatching', action);
//   let result = next(action);
//   console.log('next state', store.getState());
//   return result;
// };

const store = createStore(reducer, {}, applyMiddleware(logger));
let unsubscribe = null;

const updateUI = () => {
  const state = store.getState();
  displayText.innerHTML = JSON.stringify(state);
};

const changeCallback = (newState) => {
  updateUI();
};

dispatchButton.addEventListener('click', () => {
  store.dispatch({ type: 'TEST', payload: Date.now() });
});

subscribeButton.addEventListener('click', () => {
  unsubscribe = store.subscribe(changeCallback);
  console.log('SUBSCRIBED', { unsubscribe });
});

unsubscribeButton.addEventListener('click', () => {
  console.log('UNSUBSCRIBED');
  unsubscribe();
});

updateUI();
