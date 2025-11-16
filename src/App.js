import './App.css';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./pages/about";
import Artwork from "./pages/art";
import Games from "./pages/game";
import BG from "./pages/Img/background.jpg";

// should prevent images to be copied
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/art" element={<Artwork />} />
          <Route path="/game" element={<Games />}/> 
      </Routes>
      <body>
        <img className="App-BG background" src={BG} alt='background credits:circe denyer'/>
      </body>
    </Router>
  );
}

export default App;
