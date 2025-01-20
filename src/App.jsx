import "./App.css";
import Header from "./Header";
import fetchCharacterData from "./data/characterData";
fetchCharacterData("rainbow");
function App() {
  return (
    <>
      <main>
        <Header title="My Little Wiki" />
      </main>
    </>
  );
}

export default App;
