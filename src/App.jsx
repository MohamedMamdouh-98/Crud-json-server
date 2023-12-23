import axios from "axios";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppBar from "./components/AppBar";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Category from "./pages/Categorys";
import Home from "./pages/Home";
import './index.css'

const App = () => {
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      res.json();
    });
  }, []);
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
                <Route path="/categorys" element={<Category />} />
              </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
