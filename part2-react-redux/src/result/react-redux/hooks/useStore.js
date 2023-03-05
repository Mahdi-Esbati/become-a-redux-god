import { useContext, Context } from 'react';
import { ReactReduxContext } from '../Context';
import { useReduxContext } from './useReduxContext';

export function useStore() {
  const { store } = useReduxContext();
  return store;
}
