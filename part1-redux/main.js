// import { createStore } from 'redux';
import { createStore } from './result/reduxStore';
// import { createStore } from './start/reduxStore';

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

const store = createStore(reducer, {});
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
