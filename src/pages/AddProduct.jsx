import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title != "" && price != "" && category != "") {
      axios
        .post("http://localhost:5000/products", {
          title,
          price,
          category,
        })
        .then((data) => {
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
          navigate("/products");
        });
    }
  };

  return (
    <Form className="mt-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>
          Title <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="add title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>
          Category <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="add category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>
          Price <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="number"
          placeholder="add price"
          onChange={(e) => setPrice(+e.target.value)}
          value={price}
        />
      </Form.Group>
      <Button type="submit" disabled={title == "" && price == "" && category == ""}>Send</Button>
    </Form>
  );
};

export default AddProduct;
