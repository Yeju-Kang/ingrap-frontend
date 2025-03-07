import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveLastVisitedPage } from "../store/authSlice";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const location = useLocation();
    const dispatch = useDispatch();

    if (!isAuthenticated) {
        // ✅ 로그인 페이지 이동 전에 현재 페이지 저장
        dispatch(saveLastVisitedPage(location.pathname));
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
