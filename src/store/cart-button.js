import { createSlice } from "@reduxjs/toolkit";

const initialState = { isShown: true };

const cartButtonSlice = createSlice({
  name: "cartbutton",
  initialState,
  reducers: {
    cartToggle(state) {
      state.isShown = !state.isShown;
    },
  },
});

export const cartButtonActions = cartButtonSlice.actions;

export default cartButtonSlice.reducer;
