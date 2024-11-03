import { createSlice } from '@reduxjs/toolkit';

const curencySlice = createSlice({
  name: 'curency',
  initialState: { baseCurency: '' },
  reducers: {
    setBaseCurency: (state, action) => {
      state.baseCurency = action.payload;
    },
  },
});

export const curencyReducer = curencySlice.reducer;
export const { setBaseCurency } = curencySlice.actions;
