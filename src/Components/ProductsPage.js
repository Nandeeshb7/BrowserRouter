import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function ProductsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { hash, pathname, search } = location;
  const routeId = pathname.split("/").pop();
  console.log("parmas", routeId);

  return (
    <div>
      This is a ProductsPage
      <button
        style={{
          backgroundColor: "lightblue",
          color: "white",
          borderRadius: "5px",
        }}
        onClick={() => navigate(`/listofpoducts`)}
      >
        Click to Navigate
      </button>
    </div>
  );
}
