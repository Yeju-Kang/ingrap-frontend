import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api"; // ✅ 백엔드 URL

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,  
});

// ✅ JWT 토큰을 자동으로 설정하는 함수
export const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers.common["Authorization"];
    }
};

export default apiClient;
