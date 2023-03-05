import { useContext } from 'react';

import { useReduxContext } from './useReduxContext';
import { ReactReduxContext } from '../Context';

// https://beta.reactjs.org/reference/react/useSyncExternalStore
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/with-selector';

const refEquality = (a, b) => a === b;

export function useSelector(selector, equalityFn = refEquality) {
  const { store, subscription } = useReduxContext();

  const selectedState = useSyncExternalStoreWithSelector(
    subscription.addNestedSub,
    store.getState,
    null, // server side
    selector,
    equalityFn
  );

  return selectedState;
}
