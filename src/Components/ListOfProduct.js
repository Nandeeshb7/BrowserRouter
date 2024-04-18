import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

export default function ListOfProduct() {
  const [productData, setProudctData] = useState([]);
  const productId = useParams();
  const id = productId.profileId;

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}/`)
      ?.then((res) => {
        return res?.json();
      })
      ?.then((data) => {
        console.log("products data", data.products);
        setProudctData(data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      Details of the commadity {id}
      {productData?.map((productname) => (
        <li key={productname.id}>{productname.title}</li>
      ))}
    </div>
  );
}
