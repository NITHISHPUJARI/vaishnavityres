import React, { useState } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row id="top" style={{ backgroundColor: "#d9d9d9" }}>
        <Col xs={1} md={1} sm={1} lg={1} onClick={handleShow}>
          <List id="menu" style={{ fontSize: "2.5rem" }} />
        </Col>
        <Col xs={10} md={10} sm={10} lg={10}>
          <h1 id="title" style={{ letterSpacing:'4px' }}>
            VAISHNAVI TYRES
          </h1>
        </Col>
      </Row>
      <Offcanvas show={show} onHide={handleClose} style={{width:'200px'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav.Link id='btns' onClick={handleClose} as={Link} to='/' >Home</Nav.Link>
          <Nav.Link id='btns' onClick={handleClose} as={Link} to='/products' >Products</Nav.Link>
          <Nav.Link id='btns' onClick={handleClose} as={Link} to='/aboutus' >About us</Nav.Link>
          <Nav.Link id='btns' onClick={handleClose} as={Link} to='/contact' >Contact us</Nav.Link>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
