import "./Search.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Search({ category, limit = 200 }) {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const url = "https://ponyapi.net/v1/";
  useEffect(() => {
    fetch(
      `${url}${category}/${
        input ? input.replace(/[\s,]/g, "_") : "all"
      }?limit=${limit}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, [input, category, limit]);
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
            {data.map((target, index) => {
              return (
                <Link key={`${target.name}-information`} to={`./${target.id}`}>
                  <li key={index}>{target.name}</li>
                </Link>
              );
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
          data.map((target, index) => {
            return (
              <Link key={`${target.name}-information`} to="information">
                <li key={index}>{target.name}</li>
              </Link>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
}
export default Search;
