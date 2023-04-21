import React from "react";
import "./styles/Header.css";
import HamNavbar from "./HamNavbar";

export default function Header() {
  return (
    <div className="container-fluid">
      {/* <HamNavbar /> */}
      <div className="content my-5">
        <p
          style={{ fontSize: "5rem", marginBottom: "2rem", marginTop: "2rem" }}
        >
          “Astrology for Clarity”
        </p>
        <p style={{ fontSize: "1rem" }}>
          Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra
          Theraphy{" "}
        </p>
        <div
          className="consult-now"
          style={{
            position: "relative",
            color: "white",
            height: "3rem",
            width: "12.67rem",
            background: "#D97122",
            borderRadius: "1.63rem",
            textAlign: "center",
            margin: "auto",
            fontSize: "1.2rem",
            marginTop: "1rem",
            paddingTop: "0.6rem",
            fontFamily: "sans-serif",
          }}
        >
          Consult Now
        </div>
        <div className="d-flex flex-row mt-5 fs-5 text-red">
          <div className="mx-4">
            <i className="fa-solid fa-headset fa-2x"></i>
            &nbsp; 24 X 7 Customer Support
          </div>
          <div className="mx-3">
            <i className="fa-solid fa-wallet fa-2x"></i> &nbsp;100% Refund if
            Unsatisfied
          </div>
          <div className="mx-3">
            <i className="fa-solid fa-lock fa-2x"></i>&nbsp; Private &
            Confidential
          </div>
          <div className="mx-3">
            <i className="fa-solid fa-file-shield fa-2x"></i>&nbsp; Verified
            Astrologer
          </div>
          <div className="mx-3">
            <i className="fa-solid fa-shield-halved fa-2x"></i>&nbsp; Secure
            Payment
          </div>
        </div>
      </div>
    </div>
  );
}
