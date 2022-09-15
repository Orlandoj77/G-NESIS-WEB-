import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Driver from "../pages/driver";

const Routing: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="*" element={<h1> Got Lost?? </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
