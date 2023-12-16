import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IMessage } from "@/interface/messag-interface";
import { stat } from "fs";

const initialState: IMessage[] = [
  {
    message: "",
  },
];

export const MessageSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<IMessage>) => {
      state.push(action.payload);
    },
    removeMessage: (state, action: PayloadAction<IMessage>) => {
      let index = state.indexOf(action.payload);
      state.splice(0, index);
    },
  },
});

export default MessageSlice.reducer;
export const { addMessage, removeMessage } = MessageSlice.actions;
