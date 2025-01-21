import "./Characters.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import getCharacterData from "../js/getCharacterData";
import SearchBar from "../components/Search";
import { useState } from "react";

function Characters() {
  // const characters = await getCharacterData();
  // characters.map((el) => console.log(el));
  const [characters, setCharacters] = useState(getCharacterData());
  console.log(characters);
  return (
    <>
      <Header title={"Characters"} />
      <main>
        <SearchBar />
        <ul></ul>
      </main>
      <Footer />
    </>
  );
}
export default Characters;
