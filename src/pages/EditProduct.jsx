import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {
  const [product, setProduct] = useState({});

  const { productId } = useParams();
const navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:5000/products/${productId}`).then((res) => {
      setProduct(res.data);
    });
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/products/${productId}`, product)
      .then((res) => {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
          navigate("/products");
      });
  };
  return (
    <Form className="mt-3" onSubmit={handleSubmit}>
      <h2>{product.id}</h2>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>
          Title <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="add title"
          value={product.title}
          onChange={(e)=> setProduct({...product, title: e.target.value})}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>
          Category <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="add category"
          value={product.category}
          onChange={(e)=> setProduct({...product, category: e.target.value})}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>
          Price <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="number"
          placeholder="add price"
          value={product.price}
          onChange={(e)=> setProduct({...product, price: e.target.value})}
        />
      </Form.Group>
      <Button type="submit">Edit</Button>
    </Form>
  );
};

export default EditProduct;
