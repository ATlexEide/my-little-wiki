import { useState } from "react";

function SearchBar() {
  const [input, setInput] = useState("");
  return <input value={input} onChange={(e) => setInput(e.target.value)} />;
}
export default SearchBar;
