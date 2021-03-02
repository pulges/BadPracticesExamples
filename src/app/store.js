import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appReducer from './Reducers/appReducer';
import other from './Reducers/otherReducer';
import createSagaMiddleware from "redux-saga";
import saga from "./saga.js";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store =  configureStore({
  reducer: {
    app: appReducer,
    other: other
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;
