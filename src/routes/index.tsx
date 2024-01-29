import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Table from "../pages/Table"
import Home from "../pages/Home";

const MainRoutes :React.FC= () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/table" element={<Table/>}/>
      </Routes>
    </Router>
  );
};

export default MainRoutes;
0