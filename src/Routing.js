import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeForm from "./Component/HomeForm";
import Table from "./Component/Table";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomeForm />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  );
}

export default Routing;
