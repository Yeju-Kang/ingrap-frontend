import DrawingPage from "../pages/DrawingPage/DrawingPage";
import ProductDetailPage from "../pages/ShopPage/ProductDetailPage";
import useTranslate from "../hooks/useTranslate"; // ✅ 번역 훅 가져오기
import CartPage from "../pages/CartPage/CartPage";
import ShopPage from "../pages/ShopPage/ShopPage";

// ✅ 커스텀 훅으로 변경
export const useAllRoutes = () => {
  const { translate } = useTranslate(); // ✅ 번역 함수 가져오기

  return [
    { path: "/drawing", label: translate("drawing.title"), element: <DrawingPage /> },
    { path: "/shop", label: translate("product.title"), element: <ShopPage /> },
    { path: "/shop/:productId", element: <ProductDetailPage />, label: null },
    { path: "/cart",label: null, element: <CartPage /> },
  ];
};

// ✅ menuRoutes도 훅 내부에서 처리해야 오류가 발생하지 않음
export const useMenuRoutes = () => {
  return useAllRoutes().filter(({ label }) => label !== null);
};
