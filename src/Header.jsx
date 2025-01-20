import "./Header.css";
import NavLinkExternal from "./NavLinkExternal";
import SearchBar from "./SearchBar";
function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <SearchBar />
      <nav>
        <ul>
          <NavLinkExternal
            link="https://github.com/ATlexEide/KHFEU04-API"
            text="Repo"
          />
          <NavLinkExternal link="https://ponyapi.net/" text="API" />
        </ul>
      </nav>
    </header>
  );
}
export default Header;
