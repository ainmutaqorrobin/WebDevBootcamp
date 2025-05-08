import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/nav";
import { mainRoute } from "./components/main";
import { booksRoute } from "./components/books";

const Club = lazy(() => import("./components/club"));

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      { index: true, ...mainRoute },
      { path: "/books", ...booksRoute },
      { path: "/club", element: <Club /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
