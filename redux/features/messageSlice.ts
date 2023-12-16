import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

export const MessageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
  },
});

export default MessageSlice.reducer;
export const { addMessage } = MessageSlice.actions;
