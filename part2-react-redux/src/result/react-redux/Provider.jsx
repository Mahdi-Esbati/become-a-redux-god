import React, { Context, ReactNode, useLayoutEffect, useMemo } from 'react';

import { ReactReduxContext } from './Context';
import { createSubscription } from './createSubscription';

function Provider({ store, context, children }) {
  const contextValue = useMemo(() => {
    const subscription = createSubscription(store);
    return {
      store,
      subscription,
    };
  }, [store]);

  const previousState = useMemo(() => store.getState(), [store]);

  useLayoutEffect(() => {
    const { subscription } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState]);

  const Context = context || ReactReduxContext;

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
