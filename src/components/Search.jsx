import { useState } from "react";
import "./Search.css";

function Search({ characters }) {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul>
        {characters.map((character, index) => {
          return <li key={index}>{character.name}</li>;
        })}
      </ul>
    </>
  );
}
export default Search;
