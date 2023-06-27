import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import Detail from "../src/pages/Detail.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    // dynamic route
    {
      path: "/:country",
      element: <Detail />,
    },
  ],
  {
    basename: "/countries",
  }
);

const App = () => {
  return router;
};

export { App, router };
