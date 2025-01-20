import "./Header.css";
import SearchBar from "./SearchBar";
function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <SearchBar />
    </header>
  );
}
export default Header;
