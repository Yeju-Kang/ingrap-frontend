import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api"; // ✅ 백엔드 API 주소

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // ✅ 쿠키 인증 위해 필수!
});

export default apiClient;
 