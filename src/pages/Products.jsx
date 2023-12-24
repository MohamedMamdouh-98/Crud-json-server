import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState();

  const getAllProducts = ()=> {
    fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    });
  }
  useEffect(() => {
    getAllProducts()
  }, []);

  return (
    <div className="mt-3">
      <h2>products</h2>
      <Button as={Link} to="products/add" variant="success">
        add product
      </Button>
      <table className="table table-striped mt-2">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">category</th>
            <th scope="col">edit</th>
            <th scope="col">view</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((el) => (
            <tr key={el.id}>
              <th scope="row">{el.id}</th>
              <td>{el.title.slice(0, 15)}...</td>
              <td>{el.price}</td>
              <td>{el.category}</td>
              <td>
                <Button variant="warning">edit</Button>
              </td>
              <td>
                <Button as={Link} to={`/products/${el.id}`} variant="primary">view</Button>
              </td>
              <td>
                <Button variant="danger">delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
