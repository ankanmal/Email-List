import { configureStore } from "@reduxjs/toolkit";
import emailListReducer from "./components/emailListSlice";

export default configureStore({
  reducer: {
    emailList: emailListReducer,
  },
});
