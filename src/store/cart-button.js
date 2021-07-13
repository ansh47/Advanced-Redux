import { createSlice } from "@reduxjs/toolkit";

const initialState = { isShown: true, notification: null };

const cartButtonSlice = createSlice({
  name: "cartbutton",
  initialState,
  reducers: {
    cartToggle(state) {
      state.isShown = !state.isShown;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartButtonActions = cartButtonSlice.actions;

export default cartButtonSlice.reducer;
