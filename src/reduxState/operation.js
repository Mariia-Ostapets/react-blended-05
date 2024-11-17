import { createAsyncThunk } from '@reduxjs/toolkit';
import { exchangeCurrency, latestRates } from 'service/exchangeAPI';
import { getUserInfo } from 'service/opencagedataApi';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/baseCurrency',
  async (coords, thunkAPI) => {
    const state = thunkAPI.getState();
    const { baseCurrency } = state.currency;
    if (baseCurrency) {
      return baseCurrency;
    }
    try {
      const data = await getUserInfo(coords);
      return data.results[0].annotations.currency.iso_code;
    } catch (_) {
      return thunkAPI.rejectWithValue('USD');
    }
  },
);

export const fetchExchangeCurrency = createAsyncThunk(
  'currency/exchangeCurrency',
  async (credendials, thunkAPI) => {
    try {
      const data = await exchangeCurrency(credendials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchRates = createAsyncThunk(
  'currency/rates',
  async (baseCurrency, thunkAPI) => {
    try {
      const data = await latestRates(baseCurrency);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
