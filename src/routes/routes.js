import SpacePage from "../features/space/pages/SpacePage";
import ProductDetailPage from "../features/shop/pages/ProductDetailPage";
import useTranslate from "../hooks/useTranslate"; // ✅ 번역 훅 가져오기
import CartPage from "../features/cart/pages/CartPage";
import ShopPage from "../features/shop/pages/ShopPage";
import CommunityPage from "../features/community/pages/CommunityPage";
import PostDetailPage from "../features/community/pages/PostDetailPage";
import SignUpPage from "../features/auth/pages/SignUpPage";
import LoginPage from "../features/auth/pages/LoginPage";
import ProfilePage from "../features/user/pages/ProfilePage";
import CheckoutPage from "../features/checkout/pages/CheckoutPage";
import PaymentPage from "../features/payment/pages/PaymentPage";
import DevToolsPage from "../features/devTools/pages/DevToolsPage";
import EmptyPage from "../features/space/pages/EmptyPage";


// MVP에서는 커뮤니티 메뉴 숨기기
const showCommunity = false;

export const useAllRoutes = (isAuthenticated) => {
  const { translate } = useTranslate();

  return [
    { path: "/space", label: translate("space.title"), element: <SpacePage /> },
    { path: "/shop", label: translate("shop.title"), element: <ShopPage /> },
    { path: "/shop/:productId", element: <ProductDetailPage />, label: null },

    // ✅ 커뮤니티는 label만 null 처리하면 메뉴에서 숨김됨
    {
      path: "/community",
      label: showCommunity ? translate("community.title") : null,
      element: <CommunityPage />
    },
    {
      path: "/community/:postId",
      label: null,
      element: <PostDetailPage />
    },

    { path: "/signup", element: <SignUpPage />, label: null },
    { path: "/login", element: <LoginPage />, label: null },
    { path: "/profile", element: <ProfilePage />, label: null },
    { path: "/cart", element: <CartPage />, label: null },
    { path: "/checkout", element: <CheckoutPage />, label: null },
    { path: "/payment", element: <PaymentPage />, label: null },
    { path: "/dev/tools", element: <DevToolsPage />, label: null },
    { path: "/empty", element: <EmptyPage />, label: null },
  ];
};

// ✅ menuRoutes도 훅 내부에서 처리해야 오류가 발생하지 않음
export const useMenuRoutes = () => {
  return useAllRoutes().filter(({ label }) => label !== null);
};


