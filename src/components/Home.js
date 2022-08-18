import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Whatsnew from "./home/Whatsnew";
export default function Home() {
  return (
    <div>
      <Container>
        <div style={{ textAlign: "center" }}>
          <h1 id='heading'>Vaishnavi Tyres</h1>
          <h3>Wheel Alignment Center</h3>
        </div>
        <Row><img src={require('../imgs/home.jpg')}  /></Row>
        <h2>What's New</h2>
        <Whatsnew />
      </Container>
    </div>
  );
}
