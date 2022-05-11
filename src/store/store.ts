import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {employeesAPI} from "./apis/employeesAPI";

export const store = configureStore({
  reducer: {
    [employeesAPI.reducerPath]: employeesAPI.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
