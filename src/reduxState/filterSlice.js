import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    currency: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
