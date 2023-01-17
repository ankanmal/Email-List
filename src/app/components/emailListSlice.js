import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const EMAIL_URL = "https://flipkart-email-mock.vercel.app/";

const initialState = {
  emailList: [],
  status: "idle",
  error: null,
};

export const fetchEmail = createAsyncThunk("emailList/fetchEmail", async () => {
  try {
    const data = await fetch(EMAIL_URL);
    const json = await data.json();
    return json;
  } catch (err) {
    console.log("Failed to get Data " + err);
  }
});

export const emailListSlice = createSlice({
  name: "emailList",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchEmail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchEmail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.emailList = state.emailList.concat(action.payload);
      })
      .addCase(fetchEmail.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default emailListSlice.reducer;

export const getAllEmail = (state) => state.emailList.emailList;
