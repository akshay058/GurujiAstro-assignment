import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RouterPath() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
