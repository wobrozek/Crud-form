import { combineReducers, configureStore  } from '@reduxjs/toolkit';
import languagesRedcuer from './languages';
import storage from 'redux-persist/lib/storage';
import formReducer from './form';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  version:1,
  storage,
}

const rootReducer = combineReducers({ 
  languages:languagesRedcuer,
  form:formReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:persistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor =persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
