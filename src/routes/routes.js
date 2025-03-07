import ProjectPage from "../pages/ProjectPage/ProjectPage";
import ProductDetailPage from "../pages/ShopPage/ProductDetailPage";
import useTranslate from "../hooks/useTranslate"; // ✅ 번역 훅 가져오기
import CartPage from "../pages/CartPage/CartPage";
import ShopPage from "../pages/ShopPage/ShopPage";
import CommunityPage from "../pages/CommunityPage/CommunityPage";
import PostDetailPage from "../pages/CommunityPage/PostDetailPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import LoginPage from "../pages/LogingPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";


// ✅ 커스텀 훅으로 변경
export const useAllRoutes = (isAuthenticated) => {
  const { translate } = useTranslate(); // ✅ 번역 함수 가져오기

  return [
    { path: "/project", label: translate("project.title"), element: <ProjectPage /> },
    { path: "/shop", label: translate("shop.title"), element: <ShopPage /> },
    { path: "/shop/:productId", element: <ProductDetailPage />, label: null },
    { path: "/community", label: translate("community.title"), element: <CommunityPage /> },
    { path: "/community/:postId", element: <PostDetailPage />, label: null },
    { path: "/signup", element: <SignUpPage />, label: null },
    { path: "/login", element: <LoginPage />, label: null },
    { path: "/profile", element: <ProfilePage />, label: null },
    { path: "/cart", element: <CartPage />, label: null },
    { path: "/checkout", element: <CheckoutPage />, label: null },
    { path: "/profile", element: <ProfilePage />, label: null },
    { path: "/payment", element: <PaymentPage />, label: null },
  ];
};

// ✅ menuRoutes도 훅 내부에서 처리해야 오류가 발생하지 않음
export const useMenuRoutes = () => {
  return useAllRoutes().filter(({ label }) => label !== null);
};


