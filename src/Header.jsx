import "./Header.css";
import NavLinkExternal from "./NavLinkExternal";
function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
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
