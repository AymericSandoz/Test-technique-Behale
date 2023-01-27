import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profil from "../pages/Profil";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
