import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Songs from "./pages/Songs";
import Episodes from "./pages/Episodes";
import Comics from "./pages/Comics";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="KHFEU04-API/" element={<Home />} />
        <Route path="KHFEU04-API/characters" element={<Characters />} />
        <Route path="KHFEU04-API/songs" element={<Songs />} />
        <Route path="KHFEU04-API/episodes" element={<Episodes />} />
        <Route path="KHFEU04-API/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
