import { call, takeEvery, put, all, select } from "redux-saga/effects";

import { setSelect1, setSelect2, selectSel1, selectSel2 } from '../features/counter/counterSlice';

// INCORRECT

 export function* value1saga(action) {
  console.log(1);
  const state = yield select();
  yield put(setSelect1(action.data));

  // clear other selection value
  if (selectSel2(state) !== 'none') {
    yield put({ type: 'SELECT_VALUE2', data: 'none' });
  }
}

export function* value2saga(action) {
  console.log(2);
  const state = yield select();
  yield put(setSelect2(action.data));

  // clear other selection value
  if (selectSel1(state) !== 'none') {
    yield put({ type: 'SELECT_VALUE1', data: 'none' });
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery('SELECT_VALUE1', value1saga),
    takeEvery('SELECT_VALUE2', value2saga)
  ]);
}



// BETTER
// export function* value1saga(action) {
//   yield put(setSelect1(action.data));
// }

// export function* value2saga(action) {
//   yield put(setSelect2(action.data));
// }

// export function* userValue1saga(action) {
//   yield put({ type: 'SELECT_VALUE1', data: action.data});

//   // clear other selection value
//   const state = yield select();

//   if (selectSel2(state) !== 'none') {
//     yield put({ type: 'SELECT_VALUE2', data: 'none' });
//   }
// }

// export function* userValue2saga(action) {
//   yield put({ type: 'SELECT_VALUE2', data: action.data});

//   const state = yield select();

//   // clear other selection value
//   if (selectSel1(state) !== 'none') {
//     yield put({ type: 'SELECT_VALUE1', data: 'none' });
//   }
// }

// export default function* rootSaga() {
//   yield all([
//     takeEvery('USER_SELECT_VALUE1', userValue1saga),
//     takeEvery('USER_SELECT_VALUE2', userValue2saga),
//     takeEvery('SELECT_VALUE1', value1saga),
//     takeEvery('SELECT_VALUE2', value2saga)
//   ]);
// }