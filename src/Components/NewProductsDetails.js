import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function NewProductsDetails() {
  const [productImages, setProductImages] = useState([]);
  const params = useParams();
  const id = params.productId;
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:3002/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("new products data", data);
        // Ensure data.images is an array before setting state
        if (Array.isArray(data.images)) {
          setProductImages(data.images);
        } else {
          console.error("Images data is not an array");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return (
    <div>
      {productImages.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
}
