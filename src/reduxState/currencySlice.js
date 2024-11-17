import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchRates,
} from './operation';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    exchangeInfo: null,
    isLoading: false,
    isError: null,
    rates: [],
  },
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchBaseCurrency.rejected, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.exchangeInfo = action.payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, action) => {
        state.exchangeInfo = null;
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.exchangeInfo = null;
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchRates.pending, state => {
        state.rates = [];
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.rates = action.payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchRates.rejected, (state, action) => {
        state.rates = [];
        state.isLoading = false;
        state.isError = action.payload;
      }),
});

export const currencyReducer = currencySlice.reducer;
export const { setBaseCurrency } = currencySlice.actions;
