import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Whatsnew() {
  return (
    <>
      <Row>
        <Col>
          <div className="head-text">
            <div className="head-image">
              <img
                src="https://www.aerocontact.com/actualite-aeronautique-spatiale/images/AERO20180517111040.jpg"
                alt="Freedom Blog"
                height="200px"
                width="380px"
              />
            </div>
            <div class="text-on-image">
              <h3> Welcome to my Blog </h3>
              <p> FREEEEDOM </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="head-text">
            <div className="head-image">
              <img
                src="https://etimg.etb2bimg.com/photo/91380881.cms"
                alt="Freedom Blog"
                height="200px"
                width="380px"
              />
            </div>
            <div class="text-on-image">
              <h3> Welcome to my Blog </h3>
              <p> FREEEEDOM </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="head-text">
            <div className="head-image">
              <img
                src="https://i.ytimg.com/vi/QJhF8hhxPfo/maxresdefault.jpg"
                alt="Freedom Blog"
                height="200px"
                width="380px"
              />
            </div>
            <div class="text-on-image">
              <h3> Welcome to my Blog </h3>
              <p> FREEEEDOM </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
