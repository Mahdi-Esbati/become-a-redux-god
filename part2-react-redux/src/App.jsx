import { createStore } from './result/redux';
import Provider from './result/react-redux/Provider';
import Home from './Home';

const reducer = (state, action) => {
  switch (action.type) {
    case 'TEST':
      return { ...state, folan: action.payload };
    default:
      return state;
  }
};

function App() {
  const store = createStore(reducer, {});
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
