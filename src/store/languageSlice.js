import { createSlice } from "@reduxjs/toolkit";
import { translations } from "../translations/index"

// ✅ Redux 초기 상태를 localStorage에서 불러오기
const initialState = {
  language: localStorage.getItem("language") || "ko",
  translations, // ✅ Redux에서 번역 데이터 직접 관리
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("language", action.payload); // ✅ localStorage 업데이트
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;