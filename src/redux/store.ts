import { configureStore } from '@reduxjs/toolkit';
import languagesRedcuer from './languages';
import formSlice from './form';

export const store = configureStore({
  reducer: {
    "languages":languagesRedcuer,
    'form':formSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
