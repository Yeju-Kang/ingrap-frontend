import ProductDetailPage from "../pages/ProductPage/ProductDetailPage"; // 상세 페이지 import

const allRoutes = [
  { path: "/main", label: "About Us" },
  { path: "/products", label: "Product" },
  { path: "/drawing", label: "Drawing" },

  { path: "/products/:productId", element: <ProductDetailPage />, label: null },
];

const menuRoutes = allRoutes.filter((route) => route.label !== null);

export { allRoutes, menuRoutes };
