import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    user: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.user = action.payload;
    },
    removeUser: (state) => {
      console.log("inside here");
      state.value.user = null;

      console.log(state.value);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
