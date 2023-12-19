import { UserSlice } from "./features/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { MessageSlice } from "./features/messageSlice";
import { classSlice } from "./features/classSlice";

// ...
export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    messages: MessageSlice.reducer,
    class: classSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
