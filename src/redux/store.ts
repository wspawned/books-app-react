import  thunkMiddleWare  from 'redux-thunk';
import {  combineReducers, configureStore } from '@reduxjs/toolkit';
import { generalSlice } from './slices/generalSlice';

const rootReducer = combineReducers({
  general: generalSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleWare),
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;