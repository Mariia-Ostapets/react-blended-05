import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { currencyReducer } from './currencySlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'currency',
  version: 1,
  storage,
  whitelist: ['baseCurrency'],
};

const persistedReducer = persistReducer(persistConfig, currencyReducer);

export const store = configureStore({
  reducer: { currency: persistedReducer, filter: filterReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
