import { configureStore } from "@reduxjs/toolkit";
import emailListReducer from "./components/emailListSlice";
import emailReadReducer from "./components/features/readEmailSlice";

export default configureStore({
  reducer: {
    emailList: emailListReducer,
    readEmail: emailReadReducer,
  },
});
