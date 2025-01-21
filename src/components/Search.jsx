import { useState } from "react";
import "./Search.css";

function Search() {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul></ul>
    </>
  );
}
export default Search;
