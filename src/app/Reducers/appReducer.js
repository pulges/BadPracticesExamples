import { createSlice } from '@reduxjs/toolkit';

export const app = createSlice({
  name: 'app',
  initialState: {
    value: 0,
    selection1: 'none',
    selection2: 'none',
    withDataObject: {
      title: 'table title',
      list: [ 
        { id: "1", title: 'First', value: false },
        { id: "2", title: 'Second', value: false },
        { id: "3", title: 'Third', value: false },
      ]
    }
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
    },
    setListTitle: (state, action) => {
      const value = action.payload;
      state.withDataObject.title = value;
    },
    toggleRowValue: (state, action) => {
      const id = action.payload;
      const row = state.withDataObject.list.find(r => r.id === id);
      if (row) {
        row.value = !row.value;
      }
    },
  },
});

export const { increment, decrement, setSelect1, setSelect2, setListTitle, toggleRowValue } = app.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.app.value;
export const selectSel1 = state => state.app.selection1;
export const selectSel2 = state => state.app.selection2;

export default app.reducer;
