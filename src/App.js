import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrestashopProject from "./components/Projects/PrestashopProject";
import HmdbProject from "./components/Projects/HmdbProject";
import VoyageInterieurProject from "./components/Projects/VoyageInterieurProject";
import FortunaeProject from "./components/Projects/FortunaeProject";
import PenguinIceFloeProject from "./components/Projects/PenguinIceFloeProject";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/prestashop" element={<PrestashopProject />} />
          <Route path="/project/hmdb" element={<HmdbProject />} />
          <Route path="/project/voyage" element={<VoyageInterieurProject />} />
          <Route path="/project/fortunae" element={<FortunaeProject />} />
          <Route path="/project/penguin" element={<PenguinIceFloeProject />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
