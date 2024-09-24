import {persistStore, persistReducer} from 'redux-persist';

import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createFilter from 'redux-persist-transform-filter';
import app from './app';
import auth from './auth';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const appReducerFilter = createFilter('app', []);
const authReducerFilter = createFilter('auth', ['user', 'access_token']);
const rootReducer = combineReducers({
  app,
  auth,
});

const persistConfig = {
  key: 'root',
  whitelist: ['app', 'auth'],
  storage: AsyncStorage,
  transforms: [appReducerFilter, authReducerFilter],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export default store;
