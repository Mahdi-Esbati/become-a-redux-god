import React from 'react';

import { useSelector } from './result/react-redux/hooks/useSelector';
import { useDispatch } from './result/react-redux/hooks/useDispatch';

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'TEST', payload: Date.now() });
  };

  return (
    <div>
      <h4>state:</h4>
      <span>{JSON.stringify(state)}</span>
      <br />
      <button onClick={handleClick}>dispatch</button>
    </div>
  );
};

export default Home;
