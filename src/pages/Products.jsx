import React from "react";
import { Button } from "react-bootstrap";

const Products = () => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">category</th>
            <th scope="col">update</th>
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
              <Button>update</Button>
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
