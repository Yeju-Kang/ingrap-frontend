import AboutPage from "../pages/AboutPage/AboutPage";
import ProductsPage from "../pages/ProductPage/ProductPage";
import DrawingPage from "../pages/DrawingPage/DrawingPage";
import ProductDetailPage from "../pages/ProductPage/ProductDetailPage";
import useTranslate from "../hooks/useTranslate"; // ✅ 번역 훅 가져오기

// ✅ 커스텀 훅으로 변경
export const useAllRoutes = () => {
  const { translate } = useTranslate(); // ✅ 번역 함수 가져오기

  return [
    { path: "/about", label: translate("aboutUs.title"), element: <AboutPage /> },
    { path: "/products", label: translate("product.title"), element: <ProductsPage /> },
    { path: "/drawing", label: translate("drawing.title"), element: <DrawingPage /> },
    { path: "/products/:productId", element: <ProductDetailPage />, label: null },
  ];
};

// ✅ menuRoutes도 훅 내부에서 처리해야 오류가 발생하지 않음
export const useMenuRoutes = () => {
  return useAllRoutes().filter(({ label }) => label !== null);
};
