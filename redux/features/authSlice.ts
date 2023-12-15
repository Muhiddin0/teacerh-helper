import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuthState } from "@/interface/auth-interface";

const initialState: IAuthState = {
  first_name: "Samandar",
  last_name: "azamov",
  phone: "998888112308",
  birth_day: null,
  gender: "male",
  email: "admin@gmail.com",
  address: {
    region: "Toshkent",
    city: "Bektemir",
    school: "22-maktab",
  },
  class: null,
  edu_system: null,
  science: null,
  role: {
    id: 1,
    name: "admin",
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<IAuthState>) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.phone = action.payload.phone;
      state.birth_day = action.payload.birth_day;
      state.gender = action.payload.gender;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.class = action.payload.class;
      state.edu_system = action.payload.edu_system;
      state.science = action.payload.science;
      state.role = action.payload.role;
    },
  },
});

export default UserSlice.reducer;
export const { addPerson } = UserSlice.actions;
