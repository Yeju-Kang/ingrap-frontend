// src/hooks/useLogin.js
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authApi";
import { loginSuccess } from "../store/authSlice";
import apiClient from "../api/apiClient";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { lastVisitedPage } = useSelector((state) => state.auth);

  const login = async (formData) => {
    try {
      await loginUser(formData); // ✅ 실제 로그인 요청
  
      dispatch(loginSuccess({ email: formData.email }));
      alert("로그인 성공!");
  
      const pendingSpaceId = localStorage.getItem("pendingSpaceId");
      const pendingSpaceName = localStorage.getItem("pendingSpaceName");
  
      if (pendingSpaceId && pendingSpaceName) {
        try {
          const saveRequest = {
            spaceId: Number(pendingSpaceId),
            name: pendingSpaceName, // ✅ 수정됨
            furnitures: [], // 필요 시 가구 정보 추가
          };
          await apiClient.post("/spaces/save", saveRequest);
          localStorage.removeItem("pendingSpaceId");
          localStorage.removeItem("pendingSpaceName"); // ✅ 꼭 같이 지워야 함
          console.log("자동 저장 완료 ✅");
        } catch (err) {
          console.error("자동 저장 실패 ❌", err);
        }
      }
  
      navigate(lastVisitedPage, { replace: true });
    } catch (error) {
      throw error; // 로그인 실패 시 오류는 컴포넌트에서 핸들링
    }
  };
  

  return login;
};

export default useLogin;