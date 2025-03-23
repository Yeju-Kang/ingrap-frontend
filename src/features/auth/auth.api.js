import apiClient from "../../api/apiClient";

// ✅ 회원가입 요청
export const signupUser = async (userData) => {
    return await apiClient.post("/users/signup", userData);
};

// ✅ 로그인 요청
export const loginUser = async (loginData) => {
    return await apiClient.post("/users/login", loginData);
};

export const logoutUser = async () => {
    return apiClient.post("/users/logout");
  };

  export const checkAuth = async () => {
    return apiClient.get("/protected");
  };