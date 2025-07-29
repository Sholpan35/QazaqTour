import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./aidanastud/Navbar";
import Home from "./aidanastud/Home";
import Dormitories from "./aidanastud/Dormitories";
import Jobs from "./aidanastud/Jobs";
import Education from "./aidanastud/Education";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dormitories" element={<Dormitories />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;