import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistedReducer from './rootReducer';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
export default store;