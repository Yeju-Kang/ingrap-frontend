import { createSlice } from "@reduxjs/toolkit";

// ✅ localStorage에서 기존 로그인 정보 불러오기 (토큰 X)
const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: storedUser || null,  // ✅ 로그인 정보 유지
    isAuthenticated: !!storedUser,  // ✅ 사용자 정보가 있으면 로그인 상태 유지
    lastVisitedPage: sessionStorage.getItem("lastVisitedPage") || "/",  // ✅ 새로고침해도 유지
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;

            // ✅ 로그인 성공 시 사용자 정보만 localStorage에 저장 (토큰 X)
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.lastVisitedPage = "/";  // ✅ 로그아웃 시 초기화

            localStorage.removeItem("user");  // ✅ 로컬스토리지에서 사용자 정보 삭제
            sessionStorage.removeItem("lastVisitedPage");  // ✅ 방문 페이지 정보 삭제
        },
        saveLastVisitedPage: (state, action) => {
            state.lastVisitedPage = action.payload;  // ✅ Redux 상태 업데이트
            sessionStorage.setItem("lastVisitedPage", action.payload);  // ✅ 세션스토리지에도 저장
        },
    },
});

export const { loginSuccess, logout, saveLastVisitedPage } = authSlice.actions;
export default authSlice.reducer;
