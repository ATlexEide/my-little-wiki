import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [input, setInput] = useState("");
  return <input value={input} onChange={(e) => setInput(e.target.value)} />;
}
export default SearchBar;
