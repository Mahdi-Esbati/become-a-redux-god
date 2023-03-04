import redux from './result/reduxStore';
// import redux from './start/reduxStore';

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
const store = redux.createStore(reducer, {});

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
  store.subscribe(changeCallback);
});

unsubscribeButton.addEventListener('click', () => {
  store.unsubscribe(changeCallback);
});

updateUI();
