const PERSISTED_STATE_KEY = '__PERSISTED_STATE__';

export const persisterMiddleware = store => next => action => {
  const nextAction = next(action);

  try {
    localStorage.setItem(PERSISTED_STATE_KEY, JSON.stringify(store.getState()))
  } catch (err) {}

  return nextAction;
}

export const getInitialState = () => {
  let initialState;

  try {
    const persistedState = localStorage.getItem(PERSISTED_STATE_KEY);
    initialState = JSON.parse(persistedState);
  } catch (e) {}

  if (!initialState) {
    initialState = undefined;
  }

  return initialState;
}