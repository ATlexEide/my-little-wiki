import "./Characters.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import getCharacterData from "../js/getCharacterData";
import Search from "../components/Search";
// import { useState } from "react";

const characters = await getCharacterData();
function Characters() {
  // characters.map((el) => console.log(el));
  // const [characters, setCharacters] = useState(getCharacterData());
  console.log(characters);
  return (
    <>
      <Header title={"Characters"} />
      <main>
        <Search characters={characters} />
      </main>
      <Footer />
    </>
  );
}
export default Characters;
