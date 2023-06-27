import React from "react";
import ReactDOM from "react-dom/client";
import { App, router } from "./App.jsx";
import "./index.css";
import Layout from "./layouts/Layout.jsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Layout>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
