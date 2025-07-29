import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Contacts from "./Contacts";
import Home from "./Home";
import Blogpage from "./Blogpage";
import Booking from "./Booking";
import Tours from "./Tours";
import Attractions from "./Attractions";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours/>} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/Blogpage" element={<Blogpage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
