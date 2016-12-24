export const errorMiddleware = store => next => action => {
  if (action.payload instanceof Error) {
    action.error = true;
  }
  return next(action);
};
