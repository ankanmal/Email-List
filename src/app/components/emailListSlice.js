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
  reducers: {
    readEmail(state, action) {
      const existingEmail = state.emailList.find(
        (email) => email.id === action.payload
      );
      if (existingEmail) {
        existingEmail.read = true;
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchEmail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchEmail.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload.list);

        const feat = action.payload.list.map((email) => {
          email.read = false;
          email.favorite = false;
          return email;
        });
        console.log(feat);
        state.emailList = state.emailList.concat(feat);
      })
      .addCase(fetchEmail.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default emailListSlice.reducer;
export const { readEmail } = emailListSlice.actions;

export const getAllEmail = (state) => state.emailList.emailList;
