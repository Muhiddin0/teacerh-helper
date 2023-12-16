import { UserSlice } from "./features/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { MessageSlice } from "./features/messageSlice";

// ...
export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    messages: MessageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
