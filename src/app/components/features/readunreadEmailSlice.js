import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentReadState: false,
  currentUnreadState: false,
  currentFavoriteState: false,
};

const emailReadUnreadSlice = createSlice({
  name: "emailRead",
  initialState,
  reducers: {
    toggleReadList(state) {
      if (state.currentReadState === false) {
        state.currentReadState = true;
        state.currentUnreadState = false;
        state.currentFavoriteState = false;
      } else {
        state.currentReadState = false;
      }
    },
    toggleUnreadList(state) {
      if (state.currentUnreadState === false) {
        state.currentUnreadState = true;
        state.currentReadState = false;
        state.currentFavoriteState = false;
      } else {
        state.currentUnreadState = false;
      }
    },
    toggleFavoriteList(state) {
      if (state.currentFavoriteState === false) {
        state.currentFavoriteState = true;
        state.currentUnreadState = false;
        state.currentReadState = false;
      } else {
        state.currentFavoriteState = false;
      }
    },
  },
});

export default emailReadUnreadSlice.reducer;
export const { toggleReadList } = emailReadUnreadSlice.actions;
export const { toggleUnreadList } = emailReadUnreadSlice.actions;
export const { toggleFavoriteList } = emailReadUnreadSlice.actions;
export const readEmailStatus = (state) => state.readEmail.currentReadState;
export const unreadEmailStatus = (state) => state.readEmail.currentUnreadState;
export const favoriteEmailStatus = (state) =>
  state.readEmail.currentFavoriteState;
