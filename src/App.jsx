import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import WalkSafePrivacy from "./pages/WalkSafePrivacy";
import WalkSafeSupport from "./pages/WalkSafeSupport";
import "./styles/site.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/walksafe-privacy" element={<WalkSafePrivacy />} />
        <Route path="/walksafe-support" element={<WalkSafeSupport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
