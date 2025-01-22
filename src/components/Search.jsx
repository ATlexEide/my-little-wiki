import "./Search.css";
import { useState, useEffect } from "react";

function Search({ category }) {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const url = "https://ponyapi.net/v1/";
  useEffect(() => {
    fetch(`${url}${category}/${input ? input.replace(/[\s,]/g, "_") : "all"}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, [input, category]);
  if (!data.length && input) {
    return (
      <>
        <input
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <h3 id="results" className="no-result">
          No results for: <i>{input}</i>
        </h3>
      </>
    );
  }
  if (data.length) {
    {
      return (
        <>
          <input
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {input && (
            <h3 id="results">
              Showing results for: <i>{input}</i>
            </h3>
          )}
          <ul>
            {data.map((char, index) => {
              return <li key={index}>{char.name}</li>;
            })}
          </ul>
        </>
      );
    }
  }
  return (
    <>
      <input
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* {input && (
        <h3>
          Showing results data: <i>{input}</i>
        </h3>
      )} */}

      <ul>
        {data.length ? (
          data.map((char, index) => {
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
