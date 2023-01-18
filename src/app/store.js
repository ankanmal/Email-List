import { configureStore } from "@reduxjs/toolkit";
import emailListReducer from "./components/emailListSlice";
import emailReadUnreadReducer from "./components/features/readunreadEmailSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, emailListReducer);

export const store = configureStore({
  reducer: {
    emailList: persistedReducer,
    readEmail: emailReadUnreadReducer,
  },
  middleware: [thunk],
});
export const persistor = persistStore(store);
