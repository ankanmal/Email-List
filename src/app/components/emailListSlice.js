import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const EMAIL_URL = "https://flipkart-email-mock.vercel.app/?page=";
const EMAIL_BODY = "https://flipkart-email-mock.vercel.app/?id=";

const initialState = {
  emailList: [],
  emailBody: null,
  emailLocalStorage: [],
  page: 1,
  status: "idle",
  bodystatus: "idle",
  bodyId: null,
  error: null,
};

export const fetchEmail = createAsyncThunk(
  "emailList/fetchEmail",
  async (page) => {
    try {
      const data = await fetch(EMAIL_URL + page);
      const json = await data.json();
      return json;
    } catch (err) {
      console.log("Failed to get Data " + err);
    }
  }
);
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
        //state.bodyId = action.payload;
        if (
          !state.emailLocalStorage.find(
            (localEmail) => localEmail.id === existingEmail.id
          )
        ) {
          state.emailLocalStorage.push(existingEmail);
        }
      }
    },
    updateBodyId(state, action) {
      state.bodyId = action.payload;
    },

    favoriteEmail(state, action) {
      const existingEmail = state.emailList.find(
        (email) => email.id === action.payload
      );
      if (existingEmail) {
        if (existingEmail.read === true) {
          existingEmail.favorite = true;
          const localEmail = state.emailLocalStorage.find(
            (email) => email.id === action.payload
          );
          if (localEmail) {
            localEmail.favorite = true;
          }
        }
      }
    },
    removeFavoriteEmail(state, action) {
      const existingEmail = state.emailList.find(
        (email) => email.id === action.payload
      );
      if (existingEmail) {
        if (existingEmail.read === true) {
          existingEmail.favorite = false;
          const localEmail = state.emailLocalStorage.find(
            (email) => email.id === action.payload
          );
          if (localEmail) {
            localEmail.favorite = false;
          }
        }
      }
    },
    changePage(state, action) {
      state.page = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchEmail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchEmail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.emailList = [];
        const fetchedEmails = action.payload.list.map((email) => {
          email.read = false;
          email.favorite = false;
          if (state.emailLocalStorage.length !== 0) {
            const localEmail = state.emailLocalStorage.find(
              (localEmail) => localEmail.id === email.id
            );
            if (localEmail) {
              email.read = localEmail.read;
              email.favorite = localEmail.favorite;
            }
          }
          return email;
        });
        state.emailList = state.emailList.concat(fetchedEmails);
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
export const {
  readEmail,
  favoriteEmail,
  changePage,
  removeFavoriteEmail,
  updateBodyId,
} = emailListSlice.actions;

export const getAllEmail = (state) => state.emailList.emailList;
export const getAllBody = (state) => state.emailList.emailBody;
export const currentBodyId = (state) => state.emailList.bodyId;
export const allReadFavList = (state) => state.emailList.emailLocalStorage;
