import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    selection1: 'none',
    selection2: 'none'
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    setSelect1: (state, action) => {
      state.selection1 = action.payload;
    },
    setSelect2: (state, action) => {
      state.selection2 = action.payload;
    }
  },
});

export const { increment, decrement, setSelect1, setSelect2 } = counterSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;
export const selectSel1 = state => state.counter.selection1;
export const selectSel2 = state => state.counter.selection2;

export default counterSlice.reducer;
