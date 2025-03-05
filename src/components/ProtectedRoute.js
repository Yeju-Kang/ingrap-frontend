import { useNavigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleAccessDenied = () => {
      // 현재 경로를 state로 전달하며 로그인 페이지로 이동
      navigate('/login', { state: { from: location.pathname } });
    };
};

export default ProtectedRoute;
