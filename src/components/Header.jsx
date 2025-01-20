import "./Header.css";
import SearchBar from "./SearchBar";
function Header({ title }) {
  return (
    <header>
      <img
        src="./src/assets/My_Little_Pony_2020.webp"
        alt="My little pony 2020 logo"
      />
      <h1>{title}</h1>
      <SearchBar />
    </header>
  );
}
export default Header;
