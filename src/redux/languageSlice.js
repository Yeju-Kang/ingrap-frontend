import { createSlice } from "@reduxjs/toolkit";
import { translations } from "../translations/index"; // ✅ 통합된 번역 데이터 가져오기

const initialState = {
  language: "ko", // ✅ 기본 언어 설정 (한국어)
  translations, // ✅ 가져온 번역 데이터 사용
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

// ✅ 액션과 리듀서 export
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
