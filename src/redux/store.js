import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice"; // ✅ 언어 상태 가져오기

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export default store;
