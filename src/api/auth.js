import apiClient from "./apiClient";

// ✅ 회원가입 요청
export const signupUser = async (userData) => {
    return await apiClient.post("/users/signup", userData);
};

// ✅ 로그인 요청
export const loginUser = async (loginData) => {
    return await apiClient.post("/users/login", loginData);
};
