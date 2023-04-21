import React from "react";
import guruji from "./images/guruji.jpg";
import "./styles/FooterComp.css";
export default function FooterComp() {
  return (
    <div className="container foot">
      <div className="d-flex flex-column">
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
              fontSize: "2rem",
              marginLeft: "-4rem",
              marginTop: "1.6rem",
              fontSize: "1.8rem",
              color: "white",
            }}
          >
            Guruji
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

const style = {
  color: "white",
};
