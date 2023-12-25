import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Products = () => {
  const [products, setProducts] = useState();

  const getAllProducts = () => {
    axios.get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data);
      });
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const deleteProduct = (prduct) => {
    Swal.fire({
      title: `Do you want to clear this ${prduct.title}?`,
      showCancelButton: true,
      icon: "question",
    }).then((data) => {
      if (data?.isConfirmed) {
        axios.delete(`http://localhost:5000/products/${prduct.id}`)
          .then((res) => {
            getAllProducts();
            Swal.fire({
              title: "Deleted",
              text: "You clicked the button!",
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <div className="mt-3">
      <h2>products</h2>
      <Button as={Link} to="/add_product" variant="success">
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
                <Button
                  as={Link}
                  to={`/edit_product/${el.id}`}
                  variant="warning"
                >
                  edit
                </Button>
              </td>
              <td>
                <Button as={Link} to={`/products/${el.id}`} variant="primary">
                  view
                </Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => deleteProduct(el)}>
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
