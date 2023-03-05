import { useContext } from 'react';
import { ReactReduxContext } from '../Context';

export function useReduxContext() {
  const contextValue = useContext(ReactReduxContext);
  return contextValue;
}
