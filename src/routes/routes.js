import MainPage from "../pages/MainPage/MainPage";
import ProductsPage from "../pages/ProductPage/ProductPage";
import DrawingPage from "../pages/DrawingPage/DrawingPage";
import ProductDetailPage from "../pages/ProductPage/ProductDetailPage";

const allRoutes = [
  { path: "/main", label: "About Us", element: <MainPage /> },
  { path: "/products", label: "Product", element: <ProductsPage /> },
  { path: "/drawing", label: "Drawing", element: <DrawingPage /> },
  { path: "/products/:productId", element: <ProductDetailPage />, label: null },
];

const menuRoutes = allRoutes.filter(({ label }) => label !== null);

export { allRoutes, menuRoutes };
