import { useSelector } from "react-redux";
import axios from "axios";

const useCreateSpace = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return async (spaceName) => {
    try {
      const endpoint = isAuthenticated ? "/api/spaces" : "/api/spaces/guest";
      const res = await axios.post(endpoint, { name: spaceName });
      const spaceId = res.data;

      // localStorage에 임시 저장 가능 (예: 로그인 후 자동 저장 처리)
      localStorage.setItem("pendingSpaceId", spaceId);

      return spaceId;
    } catch (err) {
      console.error("공간 생성 실패:", err);
      return null;
    }
  };
};

export default useCreateSpace;