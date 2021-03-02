import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import other from '../features/counter/otherReducer';
import createSagaMiddleware from "redux-saga";
import saga from "./saga.js";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store =  configureStore({
  reducer: {
    counter: counterReducer,
    other: other
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;
