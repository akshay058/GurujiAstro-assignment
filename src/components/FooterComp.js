import guruji from "./images/guruji.jpg";
import "./styles/FooterComp.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
export default function FooterComp() {
  return (
    <div
      className=" foot d-flex flex-row justify-content-evenly p-4"
      style={{ color: "white" }}
    >
      <div className="d-flex flex-column my-3" style={{ width: "20%" }}>
        <div className="d-flex flex-row">
          <div>
            {" "}
            <img
              src={guruji}
              style={{ borderRadius: "50%", width: "50%", height: "50" }}
            ></img>
          </div>
          <div
            style={{
              marginLeft: "-4rem",
              marginTop: "1rem",
              fontSize: "3rem",
              color: "#F0F0F0",
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            Guruji
          </div>
        </div>
        <div
          className="my-3"
          style={{
            fontFamily: "poppins",
            fontWeight: "500",
            fontSize: "1.1rem",
          }}
        >
          About Guruji s2 to 3 lines what guruji do and how it works About
          Guruji s2 to 3 lines what guruji do and how it works
        </div>
        <div className="d-flex flex-row justify-content-between">
          <i className="fa-brands fa-facebook fa-2x"></i>
          <i className="fa-brands fa-instagram fa-2x"></i>
          <i className="fa-brands fa-square-twitter fa-2x"></i>
          <i className="fa-brands fa-youtube fa-2x"></i>
        </div>
        <div className="my-4">
          <div>
            <h3>Trusted & Seals</h3>
          </div>
          <div
            className="my-2"
            style={{
              backgroundColor: "white",
              display: "inline-block",
              cursor: "pointer",
              // height: "2rem",
              // borderRadius: "50%",
            }}
          >
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.aeHvnFKyesLUoES72tc1owHaEc&pid=Api&P=0"
              alt="rozorpay"
              style={{ width: "7rem", height: "3rem" }}
            ></img>
          </div>
          <div
            className="mx-2"
            style={{
              backgroundColor: "white",
              display: "inline-block",
              cursor: "pointer",

              // height: "2rem",
              // borderRadius: "50%",
            }}
          >
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.oUQrrw8ZkGeB3XP-ENuGCgAAAA&pid=Api&P=0"
              alt="paytm"
              style={{ width: "7rem", height: "3rem" }}
            ></img>
          </div>
          <div
            style={{
              backgroundColor: "white",
              display: "inline-block",
              cursor: "pointer",

              // height: "2rem",
              // borderRadius: "50%",
            }}
          >
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.uPClHf83yObr7zZc1Q7KXwHaEK&pid=Api&P=0"
              alt="stripe"
              style={{ width: "7rem", height: "3rem" }}
            ></img>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column my-3">
        <div className="d-flex flex-column">
          <span
            style={{
              fontFamily: "poppins",
              fontWeight: "600",
              fontSize: "1.5rem",
            }}
          >
            Company
          </span>
          <div className="d-flex flex-column my-2">
            {" "}
            <Link to="/" style={style}>
              Home
            </Link>
            <Link to="/" style={style}>
              Privacy Policy
            </Link>
            <Link to="/" style={style}>
              T & C
            </Link>
            <Link to="/" style={style}>
              {" "}
              Verified Payment
            </Link>
          </div>
        </div>
        <div className="d-flex flex-column my-5">
          <span
            className="my-2"
            style={{
              fontFamily: "poppins",
              fontWeight: "600",
              fontSize: "1.5rem",
            }}
          >
            Collaborate
          </span>
          <Link href="/" style={style}>
            Clever Tap
          </Link>
          <Link href="/" style={style}>
            Exotel
          </Link>
          <Link to="/" style={style}>
            Facebook
          </Link>
          <Link to="/" style={style}>
            Quora
          </Link>
          <Link to="/" style={style}>
            Google
          </Link>
          <Link to="/" style={style}>
            Youtube
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column mx-5 my-3">
        <div className="linkto d-flex flex-column">
          <span
            style={{
              fontFamily: "poppins",
              fontWeight: "600",
              fontSize: "1.5rem",
            }}
          >
            Support
          </span>
          <div className="d-flex flex-column my-2">
            <Link to="/" style={style}>
              Home
            </Link>
            <Link to="/" style={style}>
              Privacy Policy
            </Link>
            <Link to="/" style={style}>
              T & C
            </Link>
            <Link to="/" style={style}>
              Verified Payment
            </Link>
          </div>
        </div>
        <div className="d-flex flex-column my-5" style={{ color: "white" }}>
          <span
            className="my-2"
            style={{
              fontFamily: "poppins",
              fontWeight: "600",
              fontSize: "1.5rem",
            }}
          >
            Important Link
          </span>
          <div className=" d-flex flex-column">
            <Link to="/" style={style}>
              Tarot Reader{" "}
            </Link>
            <Link to="/" style={style}>
              Vedic Astrology
            </Link>
            <Link to="/" style={style}>
              Palmistry
            </Link>
            <Link to="/" style={style}>
              Gemology
            </Link>
            <Link to="/" style={style}>
              Vastu
            </Link>
            <Link to="/" style={style}>
              Numerology
            </Link>
          </div>
        </div>
      </div>
      <>
        <Form className="my-3">
          <Form.Group controlId="form.Name">
            {/* <Form.Label>Name</Form.Label> */}
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
          <Form.Group controlId="form.Email">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="email" placeholder="Mail Id" className="my-3" />
          </Form.Group>
          <Form.Group controlId="form.Textarea">
            {/* <Form.Label>Comment</Form.Label> */}
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write Query"
              className="my-3"
            />
            <Button type="submit" className="btn btn-success px-5 mx-5">
              submit
            </Button>
          </Form.Group>
        </Form>
      </>
    </div>
  );
}

const style = {
  color: "white",
};
