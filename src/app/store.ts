import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import todoReducer from "features/Todos/slice";

export const store = configureStore({
  reducer: {
    todoState: todoReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
