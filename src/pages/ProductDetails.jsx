import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const {productId} = useParams();
  useEffect(()=>{
      fetch(`http://localhost:5000/products/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
  },[])
  return <div>{product?.title}</div>;
};

export default ProductDetails;
