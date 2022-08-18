import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../contact.css";
export default function Contact() {
  const [other, setOther] = useState(false);
  const reason = () => {
    let x = document.getElementById("reason").value;
    if (x === "Other") {
      setOther(true);
    } else setOther(false);
  };
  return (
    <div style={{ backgroundColor: "rgb(30,30,40)", color: "white" }}>
      <Container>
        <h1>&nbsp;</h1>
        <h1 style={{ textAlign: "center" }}>Contact us</h1>
        <article class="rich-text__text">
          {" "}
          <h1>&nbsp;</h1>
          <h1>Our Service Center</h1>
          <p>
            <b>Center:</b>&nbsp;Vaishnavi Tyres
          </p>
          <p>
            <b>Address:</b>&nbsp;Palakonda Rd, Near Ayyappa Swamy Temple,
            Chandhrayyaya Colony, Balaga, Srikakulam, Andhra Pradesh 532001
          </p>
          <p>
            <b>GSTIN:</b>&nbsp;37BJDPP7621K1ZU
          </p>
          <p>
            <b>Telephone:</b>&nbsp;<a href="tel:919493291448">9493291448</a>/
            <a href="tel:919493291449">9</a> Monday to Saturday (9:30 AM to 7:00
            PM)
          </p>
          <p>
            <b>Email </b>- chellayyapujari@gmail.com
          </p>
        </article>
        <h1>&nbsp;</h1>
        <div>
          <h1 style={{ textAlign: "center" }}>Contact Form</h1>
          <form>
            <input
              name="name"
              type="text"
              class="feedback-input"
              placeholder="Name*"
              required
            />
            <input
              name="email"
              type="text"
              class="feedback-input"
              placeholder="Email"
            />
            <input
              name="number"
              type="number"
              class="feedback-input"
              placeholder="Phone number*"
              required
            />
            <input
              name="number"
              type="number"
              class="feedback-input"
              placeholder="Confirm Phone number*"
              required
            />
            <select class="feedback-input" id="reason" onChange={reason}>
              <option style={{ backgroundColor: "rgb(30,30,40)" }}>
                {" "}
                Select for a reason
              </option>
              <option
                style={{ backgroundColor: "rgb(30,30,40)" }}
                name="Price Enquiry"
              >
                Price Enquiry
              </option>
              <option
                style={{ backgroundColor: "rgb(30,30,40)" }}
                name="Product Enquiry"
              >
                Product Enquiry
              </option>
              <option
                style={{ backgroundColor: "rgb(30,30,40)" }}
                name="Service Enquiry"
              >
                Service Enquiry
              </option>
              <option style={{ backgroundColor: "rgb(30,30,40)" }} name="Other">
                Other
              </option>
            </select>
            {other && (
              <input
                id="other-input"
                name="name"
                type="text"
                class="feedback-input"
                placeholder="Other*"
                required
              />
            )}
            <textarea
              name="text"
              class="feedback-input"
              placeholder="Message*"
              required
            ></textarea>
            <p>*required </p>
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
        <h1>&nbsp;</h1>
        <h1>&nbsp;</h1>
        <br />
      </Container>
    </div>
  );
}
