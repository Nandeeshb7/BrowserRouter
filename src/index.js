import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./App";
import ProductsPage from "./Components/ProductsPage";
import ListOfProduct from "./Components/ListOfProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <>404 page not found</>,
    children: [
      {
        path: "/productspage/:profileId",
        element: <ProductsPage />,
      },
    ],
  },
  {
    path: "/productspage/:profileId",
    element: <ProductsPage />,
  },
  {
    path: "/listofpoducts",
    element: <ListOfProduct />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
