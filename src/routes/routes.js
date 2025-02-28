import AboutPage from "../pages/AboutPage/AboutPage";
import ProductsPage from "../pages/ProductPage/ProductPage";
import DrawingPage from "../pages/DrawingPage/DrawingPage";
import ProductDetailPage from "../pages/ProductPage/ProductDetailPage";

const allRoutes = [
  { path: "/about", label: "About Us", element: <AboutPage /> },
  { path: "/products", label: "Product", element: <ProductsPage /> },
  { path: "/drawing", label: "Drawing", element: <DrawingPage /> },
  { path: "/products/:productId", element: <ProductDetailPage />, label: null },
];

const menuRoutes = allRoutes.filter(({ label }) => label !== null);

export { allRoutes, menuRoutes };
