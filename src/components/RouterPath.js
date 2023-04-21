import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Header";
import App from "../App";

export default function RouterPath() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<App />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
