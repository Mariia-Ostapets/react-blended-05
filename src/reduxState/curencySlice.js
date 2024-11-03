import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operation';

const curencySlice = createSlice({
  name: 'curency',
  initialState: { baseCurency: '' },
  reducers: {
    setBaseCurency: (state, action) => {
      state.baseCurency = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurency = action.payload;
      })
      .addCase(fetchBaseCurrency.rejected, (state, action) => {
        state.baseCurency = action.payload;
      }),
});

export const curencyReducer = curencySlice.reducer;
export const { setBaseCurency } = curencySlice.actions;
