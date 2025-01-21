import "./Header.css";
import SearchBar from "./SearchBar";
function Header({ title }) {
  return (
    <header>
      <img src="mlp2020.png" alt="My little pony 2020 logo" />
      <h1>My Little Wiki{title ? ` | ${title}` : null}</h1>
      <SearchBar />
    </header>
  );
}
export default Header;
