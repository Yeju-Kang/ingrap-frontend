import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/styles/global.scss";
import { ThemeProvider } from "@mui/material/styles"; // ✅ MUI 테마 적용
import theme from "./theme"; // ✅ theme.js 가져오기
import { Provider } from "react-redux"; // ✅ Redux Provider 추가
import store from "./store/store"; // ✅ Redux Store 가져오기

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}> {/* ✅ MUI 기본 폰트 변경 */}
    <Provider store={store}> {/* ✅ Redux Store 적용 */}
      <App />
      </Provider>
      </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);
