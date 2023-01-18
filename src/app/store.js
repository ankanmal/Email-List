import { configureStore } from "@reduxjs/toolkit";
import emailListReducer from "./components/emailListSlice";
import emailReadUnreadReducer from "./components/features/readunreadEmailSlice";

export default configureStore({
  reducer: {
    emailList: emailListReducer,
    readEmail: emailReadUnreadReducer,
  },
});
