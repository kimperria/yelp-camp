import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Home/Auth/Login";
import HomePage from "./pages/Home/Home";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import AuthRoute from "./context/AuthRoute";
import SignUpPage from "./pages/Home/Auth/SignUp";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/Navbar";

initializeApp(config.firebaseConfig);

export interface IApplicationProps {}

const Application = () => {
  return (
    <Container>
      <BrowserRouter>
      <NavbarComponent />
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <HomePage />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default Application;
