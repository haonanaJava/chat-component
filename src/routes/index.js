import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      }
    ],
  },
]);

export default router;

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
