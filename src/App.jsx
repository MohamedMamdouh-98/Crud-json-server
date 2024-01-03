import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppBar from "./components/AppBar";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import './index.css'
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

const App = () => {
  return (
    <>
      <AppBar />
      <Container fluid>
        <Row>
          <Col md={2} className="m-0 p-0">
            <SideBar />
          </Col>
          <Col md={10} className="px-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<ProductDetails />} />
                <Route path="/add_product" element={<AddProduct />} />
                <Route path="/edit_product/:productId" element={<EditProduct />} />
              </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
