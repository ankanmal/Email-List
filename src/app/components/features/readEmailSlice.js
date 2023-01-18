import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentState: false,
};

const emailReadSlice = createSlice({
  name: "emailRead",
  initialState,
  reducers: {
    toggleReadList(state, action) {
      if (state.currentState === false) {
        state.currentState = true;
      } else {
        state.currentState = false;
      }
    },
  },
});

export default emailReadSlice.reducer;
export const { toggleReadList } = emailReadSlice.actions;
export const readEmailStatus = (state) => state.readEmail.currentState;
