import SpacePage from "../features/space/pages/SpacePage";
import ProductDetailPage from "../features/shop/pages/ProductDetailPage";
import useTranslate from "../hooks/useTranslate";
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
import SpaceEditorPage from "../features/space/pages/SpaceEditorPage";

const showCommunity = false;

export const useAllRoutes = (isAuthenticated) => {
  const { translate } = useTranslate();

  return [
    { path: "/space", label: translate("space.title"), element: <SpacePage /> },
    { path: "/space/:id", element: <SpaceEditorPage />, label: null }, // ✅ 변경된 라우트
    { path: "/shop", label: translate("shop.title"), element: <ShopPage /> },
    { path: "/shop/:productId", element: <ProductDetailPage />, label: null },

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
  ];
};

export const useMenuRoutes = () => {
  return useAllRoutes().filter(({ label }) => label !== null);
};
