import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentReadState: false,
  currentUnreadState: false,
};

const emailReadUnreadSlice = createSlice({
  name: "emailRead",
  initialState,
  reducers: {
    toggleReadList(state) {
      if (state.currentReadState === false) {
        state.currentReadState = true;
        state.currentUnreadState = false;
      } else {
        state.currentReadState = false;
      }
    },
    toggleUnreadList(state) {
      if (state.currentUnreadState === false) {
        state.currentUnreadState = true;
        state.currentReadState = false;
      } else {
        state.currentUnreadState = false;
      }
    },
  },
});

export default emailReadUnreadSlice.reducer;
export const { toggleReadList } = emailReadUnreadSlice.actions;
export const { toggleUnreadList } = emailReadUnreadSlice.actions;
export const readEmailStatus = (state) => state.readEmail.currentReadState;
export const unreadEmailStatus = (state) => state.readEmail.currentUnreadState;
