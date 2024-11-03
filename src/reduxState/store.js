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
import { curencyReducer } from './curencySlice';

const persistConfig = {
  key: 'curency',
  version: 1,
  storage,
  whitelist: ['baseCurency'],
};

const persistedReducer = persistReducer(persistConfig, curencyReducer);

export const store = configureStore({
  reducer: { curency: persistedReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
