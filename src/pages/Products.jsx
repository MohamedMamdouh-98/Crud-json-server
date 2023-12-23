import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="mt-3">
    <h2>products</h2>
    <Button as={Link} to='products/add' variant="success">add product</Button>
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
          <tr>
            <th scope="row">1</th>
            <td>mohamed</td>
            <td>mohamed@gmail.com</td>
            <td>01064316545</td>
            <td>
              <Button variant='warning'>edit</Button>
            </td>
            <td>
              <Button variant='primary'>view</Button>
            </td>
            <td>
              <Button variant="danger">delete</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;
