import React from "react";
import UpdatePassword from "pages/UpdatePassword";
import ForgotPassword from "pages/ForgotPassword";
import Register from "pages/Register";
import Login from "pages/Login";
import AllBlog from "pages/AllBlog";
import SigleBlog from "pages/SigleBlog";
import Subscribe from "pages/Subscribe";
import Homepage from "pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/sigleblog" element={<SigleBlog />} />
        <Route path="/allblog" element={<AllBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
