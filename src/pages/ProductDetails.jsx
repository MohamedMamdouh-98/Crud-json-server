import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <>
      <h2>{product?.title}</h2>
      <h5>Price : {product?.price} $</h5>
    </>
  );
};

export default ProductDetails;
