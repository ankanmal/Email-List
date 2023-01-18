import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const EMAIL_URL = "https://flipkart-email-mock.vercel.app/";
const EMAIL_BODY = "https://flipkart-email-mock.vercel.app/?id=";

const initialState = {
  emailList: [],
  emailBody: null,
  status: "idle",
  bodystatus: "idle",
  bodyId: null,
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
export const fetchBody = createAsyncThunk("emailBody/fetchBody", async (id) => {
  const data = await fetch(EMAIL_BODY + id);
  const jsonBody = await data.json();
  return jsonBody;
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
        state.bodyId = action.payload;
      }
    },

    favoriteEmail(state, action) {
      const existingEmail = state.emailList.find(
        (email) => email.id === action.payload
      );
      if (existingEmail) {
        existingEmail.favorite = true;
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
      })
      .addCase(fetchBody.pending, (state, action) => {
        state.bodystatus = "loading";
      })
      .addCase(fetchBody.fulfilled, (state, action) => {
        state.bodystatus = "succeeded";
        state.emailBody = action.payload;
      })
      .addCase(fetchBody.rejected, (state, action) => {
        state.bodystatus = "failed";
      });
  },
});

export default emailListSlice.reducer;
export const { readEmail, favoriteEmail } = emailListSlice.actions;

export const getAllEmail = (state) => state.emailList.emailList;
export const getAllBody = (state) => state.emailList.emailBody;
export const currentBodyId = (state) => state.emailList.bodyId;
