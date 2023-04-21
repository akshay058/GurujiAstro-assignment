import React from "react";
import { useState } from "react";
import "./styles/HamNavbar.css";

export default function HamNavbar() {
  const [state, setState] = useState({ clicked: false });
  const handleClick = () => {
    setState({ ...state, clicked: !state.clicked });
    console.log(state.clicked);
  };
  return (
    <div>
      <nav>
        <div id="mobile" onClick={() => handleClick()}>
          <i
            id="bar"
            className={
              state.clicked
                ? "fa-regular fa-circle-xmark fa-2x"
                : "fa-solid fa-bars fa-2x"
            }
          ></i>
        </div>
        <a href="https://www.guruji.life/">
          <img
            src="https://www.guruji.life/wp-content/uploads/2022/08/Guruji-Logo-1.png"
            alt="guruji"
            style={{ width: "100px", height: "100px", position: "absolute" }}
          ></img>
        </a>
        <div>
          <ul
            id="navbar"
            className={state.clicked ? "#navbar active" : "#navbar"}
          >
            <li>
              {" "}
              <a href="/" className="active">
                Home
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="/">Call with Astrologer</a>
            </li>
            <li>
              {" "}
              <a href="/">Live(Coming Soon)</a>
            </li>
          </ul>
        </div>
        <div style={{ marginRight: "100px" }}>
          <a href="https://www.guruji.life/">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.yh5tI6JVosofOhznWcn-8gAAAA&pid=Api&P=0"
              alt="user"
              style={{
                width: "100px",
                height: "100px",
                position: "absolute",
                borderRadius: "50%",
              }}
            ></img>
          </a>
        </div>
      </nav>
    </div>
  );
}
