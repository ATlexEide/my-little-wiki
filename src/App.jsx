import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import fetchCharacterData from "./data/characterData";
fetchCharacterData("rainbow");
function App() {
  return (
    <>
      <main>
        <Header title="My Little Wiki" />
      </main>
      <Footer
        title="A &copy;KodeHode Project"
        author="Alexander"
        linkSize="1em"
      />
    </>
  );
}

export default App;
