import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductsPage() {
  const params = useParams();
  const navigate = useNavigate();
  console.log("parmas", params);
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
