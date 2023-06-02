import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Show } from "./components/Show";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const PATHS = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movie",
    element: <Show />,
  },
];

const router = createBrowserRouter(PATHS);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
