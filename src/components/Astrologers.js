import React from "react";
import "./styles/Astrologers.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { userData } from "../data";
import { astroData } from "../astroData";

export default function Astrologers() {
  return (
    <div className="container my-1">
      <h1 className="text-center my-5">Premium Astrologers</h1>
      <Row xs={1} md={3} className="g-4 mx-3">
        {astroData.map((item) => (
          <Col key={item.id}>
            <Card className="card">
              <Card.Img
                variant="top"
                src={item.imgLink}
                className="img-responsive"
              ></Card.Img>
              <Card.Body
                className="d-flex flex-row justify-content-around"
                style={{ backgroundColor: "#A95210" }}
              >
                <div
                  style={{
                    position: "absolute",
                    marginTop: "-30rem",
                    color: "white",
                    fontSize: "1rem",
                    marginLeft: "-15rem",
                    fontFamily: "sans-serif",
                    textShadow: "0px 4.94286px 4.94286px rgba(0, 0, 0, 0.25)",
                    fontWeight: "600",
                  }}
                >
                  <h4>
                    <b>{item.experience}</b>
                  </h4>
                </div>
                <div
                  className="d-flex flex-row justify-content-center align-items-center"
                  style={{
                    position: "absolute",
                    marginTop: "-30rem",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    fontSize: "1.3rem",
                    borderRadius: "5%",
                    marginRight: "-16rem",
                    fontFamily: "sans-serif",
                    textShadow: "0px 4.94286px 4.94286px rgba(0, 0, 0, 0.25)",
                    fontWeight: "600",
                    width: "6rem",
                  }}
                >
                  <div
                    className="mx-2"
                    style={{
                      height: "0.7rem",
                      width: "0.7rem",
                      backgroundColor: "#2CDC00",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div>{item.status}</div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    marginTop: "-15rem",
                    color: "white",
                    fontSize: "1rem",
                    fontFamily: "Poppins",
                    opacity: "0.9",
                    marginLeft: "-8rem",
                    textShadow:
                      "0px 4.94286px 4.94286px rgba(0, 0, 0, 0.3), 0px 4.94286px 4.94286px rgba(0, 0, 0, 0.25)",
                    fontWeight: "600",
                  }}
                >
                  <h3>
                    <b>{item.name}</b>
                  </h3>
                </div>
                <div
                  style={{
                    position: "absolute",
                    marginTop: "-12rem",
                    color: "#FFDBC0",
                    fontSize: "1rem",
                    fontFamily: "Poppins",
                    marginLeft: "-10rem",
                    fontWeight: "500",
                    letterSpacing: "1px",
                    mixBlendMode: "normal",
                  }}
                >
                  <p>
                    <h5>Specialties</h5>
                  </p>
                  <span
                    className="d-flex flex-column"
                    style={{ color: "white", marginTop: "-1rem" }}
                  >
                    <h5>
                      <b> {item.specialities}</b>
                    </h5>
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    marginTop: "-8rem",
                    color: "#FFDBC0",
                    fontSize: "1rem",
                    fontFamily: "Poppins",
                    marginLeft: "-8rem",
                    fontWeight: "500",
                    letterSpacing: "1px",
                    mixBlendMode: "normal",
                  }}
                >
                  <p>
                    <h5>Skills</h5>
                  </p>
                  <span
                    className="d-flex flex-column"
                    style={{ color: "white", marginTop: "-1rem" }}
                  >
                    <h5>
                      <b> {item.skills}</b>
                    </h5>
                  </span>
                </div>
                <div
                  className="d-flex flex-column"
                  style={{
                    position: "absolute",
                    marginTop: "-7rem",
                    color: "#5CE449",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    fontSize: "1.3rem",
                    borderRadius: "5%",
                    marginRight: "-16rem",
                    fontFamily: "Poppins",
                    textShadow: "0px 4.94286px 4.94286px rgba(0, 0, 0, 0.25)",
                    fontWeight: "600",
                    width: "7rem",
                  }}
                >
                  <div className="mx-4">Price</div>
                  <div className="mx-" style={{ fontFamily: "DM Sans" }}>
                    <h2>
                      <b>{item.price}</b>
                    </h2>
                  </div>
                </div>
                <div className="chat d-flex">
                  <i className="fa-regular fa-comment-dots fa-2x mx-3"></i>{" "}
                  {/* <i className="fa-solid fa-headset fa-2x"></i> */}
                  <Card.Title>
                    <b>Chat</b>
                  </Card.Title>
                </div>
                <div
                  className="play"
                  style={{
                    // display: "inline-block",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#833800",
                    height: "6rem",
                    width: "5rem",
                    marginTop: "-4em",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",

                    // borderRadius: "50%",
                  }}
                >
                  <i
                    className="fa-regular fa-circle-play fa-3x"
                    style={{ color: "white", margin: "" }}
                  ></i>
                  <div
                    style={{
                      color: "brown",
                      textAlign: "center",
                      backgroundColor: "white",
                      marginTop: "-0.5rem",
                    }}
                  >
                    <b>LIVE</b>
                  </div>
                </div>
                <div className="call d-flex">
                  <i className="fa-solid fa-phone fa-xl mx-3 my-2"></i>
                  <Card.Title>
                    <b>Call</b>
                  </Card.Title>
                </div>

                {/* <Card.Text>Call</Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
