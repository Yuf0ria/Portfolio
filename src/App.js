import './App.css';
import './mobile_app.css';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
// Main, in navbar
import About from "./pages/about";
import Artwork from "./pages/art";
import Games from "./pages/game";
// import BG from "./pages/Img/background.jpg";
// Content, in portfolio
import Content from "./pages/about_con";
import Profile from "./pages/profile";

// should prevent images to be copied, uncomment if needed
// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// }); 


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/portfolio" element={<About />} />
          <Route path="/art" element={<Artwork />} />
          <Route path="/game" element={<Games />}/>
          <Route path="/about-Content" element={<Content />}/> 
          <Route path="/about-Contact" element={<Profile />}/> 
      </Routes>
    </Router>
  );
}

export default App;
