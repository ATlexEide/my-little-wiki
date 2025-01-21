import "./Header.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
function Header({ title }) {
  return (
    <header>
      <Link to="/my-little-wiki/">
        <img src="mlp2020.png" alt="My little pony 2020 logo" />
      </Link>
      <h1>My Little Wiki{title ? ` | ${title}` : null}</h1>
      <SearchBar />
    </header>
  );
}
export default Header;
