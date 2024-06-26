import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./App";
import ProductsPage from "./Components/ProductsPage";
import ListOfProduct from "./Components/ListOfProduct";
import NewProductsList from "./Components/NewProductsList";
import NewProductsDetails from "./Components/NewProductsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <>404 page not found</>,
    children: [
      {
        path: "/listofpoducts/:profileId",
        element: <ListOfProduct />,
      },
    ],
    // children: [
    //   {
    //     path: "/productdetails/:productId",
    //     element: <NewProductsDetails />,
    //   },
    // ],
  },
  {
    path: "/productspage",
    element: <ProductsPage />,
  },
  // {
  //   path: "/listofpoducts/:profileId",
  //   element: <ListOfProduct />,
  // },

  {
    path: "/newproductsList",
    element: <NewProductsList />,
    // children: [
    //   {
    //     path: "/productdetails/:productId",
    //     element: <NewProductsDetails />,
    //   },
    // ],
  },

  {
    path: "/productdetails/:productId",
    element: <NewProductsDetails />,
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
