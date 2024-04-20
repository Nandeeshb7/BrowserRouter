import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function NewProductsList() {
  // http://localhost:3002/products

  const [prouductData, setProuductData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3002/products`)
      ?.then((res) => {
        return res?.json();
      })
      ?.then((data) => {
        console.log("new products data", data);
        setProuductData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <div
        style={{
          padding: "30px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {prouductData?.map((productname) => (
          <button
            style={{ backgroundColor: "lightblue" }}
            onClick={() => navigate(`/productdetails/${productname.id}`)}
            // to={`/productdetails/${productname.id}`}
            key={productname.id}
          >
            {productname.title}
          </button>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
