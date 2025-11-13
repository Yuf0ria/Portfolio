import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./pages/about";
import Artwork from "./pages/art";
import Games from "./pages/game";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/works/art" element={<Artwork />} />
          <Route path="/works/game" element={<Games />}/> 
      </Routes>
    </Router>
    
  );
}

export default App;
