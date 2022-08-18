import React from "react";
import { Container } from "react-bootstrap";
import '../App.css'
export default function About() {
  return (
    <div style={{ backgroundColor: "rgb(30,30,40)" }}>
      <Container>
        <h2>&nbsp;</h2>

        <h1 style={{ color: "white", textAlign: "center", }}>About Us</h1>
        <h2>&nbsp;</h2>
        <p id='about-text'>
          <hr/>
          Vaishnavi Tyres is a one-stop-shop for Michelin, Continental,
          Bridgestone, and Goodyear tyres for the Best prices in Srikakulam. We
          offer a range of services including wheel alignment, tyre puncture
          repairs, tyre replacements, Nitrogen Filling And Maruthi Services and
          more. We are an authorized dealer of leading tyre brands and use only
          the latest technology and equipment to carry out our services. Our
          team of experts are highly qualified and has vast experience in the
          tyre industry. We offer a great range of products and services at
          highly competitive prices. So what are you waiting for? Get in touch
          with us today!
        </p>
      </Container>
    </div>
  );
}
