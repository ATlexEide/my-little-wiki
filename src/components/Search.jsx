import "./Search.css";
import { useState, useEffect } from "react";

function Search() {
  const [input, setInput] = useState("");
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(`https://ponyapi.net/v1/character/${input ? input : "all"}`)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((e) => console.log(e));
  });

  return (
    <>
      <input
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input && (
        <h3>
          Showing results for: <i>{input}</i>
        </h3>
      )}
      <ul>
        {characters.length ? (
          characters.map((char, index) => {
            return <li key={index}>{char.name}</li>;
          })
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
}
export default Search;
