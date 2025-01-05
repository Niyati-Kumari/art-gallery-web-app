/* src/App.js */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import PhotoGallery from "./components/PhotoGallery";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;