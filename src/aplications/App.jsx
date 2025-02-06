import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar.jsx";
import "../styles/styles.css";
import { Home } from "../pages/Home.jsx";
import { QuienSoy } from "../pages/QuienSoy.jsx";
import { Footer } from "../components/Footer.jsx";
import { Formacion } from "../pages/Formacion.jsx";
function App () {

  return (
    
      <BrowserRouter>

          <ScrollToTop>

            <Navbar />

            <Routes>

              <Route element={<Home />} path="/" />

              <Route element={<QuienSoy />} path="/quien-soy" />

              <Route element={<Formacion />} path="/formacion" />

            </Routes>

            <Footer />

          </ScrollToTop>

      </BrowserRouter>
    
  )
}

export default App
