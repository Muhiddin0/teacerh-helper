import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ICLassItem = {
  id: number;
  class_name: string;
};

type ICLass = {
  classList: ICLassItem[];
};
const initialState: ICLass = { classList: [] };

export const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    setClass: (state, action: PayloadAction<ICLass>) => {
      state.classList = action.payload.classList;
    },
  },
});

export default classSlice.reducer;
export const { setClass } = classSlice.actions;
