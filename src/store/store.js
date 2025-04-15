import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice"; // ✅ 언어 상태 가져오기
import authReducer from "./authSlice";
import spaceReducer from "./spaceSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    auth: authReducer,
    space: spaceReducer,
  },
});

export default store;
