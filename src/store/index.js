import {persistStore, persistReducer} from 'redux-persist';

import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createFilter from 'redux-persist-transform-filter';
import app from './app';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const appReducerFilter = createFilter('app', []);

const rootReducer = combineReducers({
  app,
});

const persistConfig = {
  key: 'root',
  whitelist: ['app'],
  storage: AsyncStorage,
  transforms: [appReducerFilter],
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
