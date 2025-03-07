import { saveLastVisitedPage } from "../store/authSlice"; // ✅ Redux 액션 임포트

export const navigateToLogin = (navigate, dispatch) => {
    const currentPath = window.location.pathname;
    dispatch(saveLastVisitedPage(currentPath));  // ✅ Redux에 저장
    sessionStorage.setItem("lastVisitedPage", currentPath);  // ✅ `sessionStorage`에도 저장
    navigate("/login");
};
