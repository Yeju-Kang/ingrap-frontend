import { createSlice } from "@reduxjs/toolkit";

// ✅ localStorage에서 기존 로그인 정보 불러오기 (토큰 X)
const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: storedUser || null, // ✅ 로그인 정보 유지
    isAuthenticated: !!storedUser, // ✅ 사용자 정보가 있으면 로그인 상태 유지
    isAuthLoading: true, // ✅ 인증 체크 중 여부
    lastVisitedPage: sessionStorage.getItem("lastVisitedPage") || "/", // ✅ 새로고침해도 유지
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem("user", JSON.stringify(action.payload)); // ✅ 로그인 정보 저장
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.lastVisitedPage = "/";
            localStorage.removeItem("user");
            sessionStorage.removeItem("lastVisitedPage");
        },
        saveLastVisitedPage: (state, action) => {
            state.lastVisitedPage = action.payload;
            sessionStorage.setItem("lastVisitedPage", action.payload);
        },
        setAuthLoading: (state, action) => {
            state.isAuthLoading = action.payload;
        },
    },
});

export const {
    loginSuccess,
    logout,
    saveLastVisitedPage,
    setAuthLoading, // ✅ export 추가
} = authSlice.actions;

export default authSlice.reducer;
