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
  try {
    const response = await apiClient.post("/users/logout");
    return response.data; // 필요 시 응답 데이터 반환
  } catch (error) {
    console.error("로그아웃 실패", error);
    throw error;
  }
};

  export const checkAuth = async () => {
    return apiClient.get("/protected");
  };