"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuthState } from "@/interface/auth-interface";

const initialState: IAuthState = {
  data: {
    first_name: null,
    last_name: null,
    phone: null,
    birth_day: null,
    gender: "male",
    email: "salomolam3@gmail.com",
    address: null,
    class: null,
    edu_system: null,
    science: {
      id: 1,
      science_name: "Matematika",
      science_group: "Aniq fanlar",
    },
    role: {
      id: 2,
      name: "teacher",
    },
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<IAuthState>) => {
      state.data = action.payload.data;
    },
  },
});

export default UserSlice.reducer;
export const { addPerson } = UserSlice.actions;
