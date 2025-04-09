import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Songs from "./pages/Songs";
import Episodes from "./pages/Episodes";
import Comics from "./pages/Comics";
import Information from "./pages/Information";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/comics" element={<Comics />} />
        <Route
          path="/characters/:id"
          element={<Information category="character" />}
        />
        <Route path="/songs/:id" element={<Information category="song" />} />
        <Route
          path="/episodes/:id"
          element={<Information category="episode" />}
        />
        <Route
          path="/comics/:id"
          element={<Information category="comics-story" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
