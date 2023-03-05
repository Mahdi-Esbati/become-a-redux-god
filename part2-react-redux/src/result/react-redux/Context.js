import { createContext } from 'react';

// export interface ReactReduxContextValue<
//   SS = any,
//   A extends Action = AnyAction
// > {
//   store: Store<SS, A>
//   subscription: Subscription
//   getServerState?: () => SS
// }

export const ReactReduxContext = /*#__PURE__*/ createContext(null);
// https://babeljs.io/blog/2018/08/27/7.0.0#pure-annotation-support

if (process.env.NODE_ENV !== 'production') {
  ReactReduxContext.displayName = 'ReactRedux';
}

export default ReactReduxContext;
