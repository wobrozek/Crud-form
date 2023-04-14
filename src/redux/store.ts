import { configureStore } from '@reduxjs/toolkit';
import languagesRedcuer from './languages';

export const store = configureStore({
  reducer: {
    "languages":languagesRedcuer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
