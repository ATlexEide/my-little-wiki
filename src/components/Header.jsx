import "./Header.css";
import { Link } from "react-router-dom";
function Header({ title }) {
  return (
    <header>
      <Link to="/">
        <img src="mlp2020.png" alt="My little pony 2020 logo" />
      </Link>
      <h1>My Little Wiki{title ? ` | ${title}` : null}</h1>
    </header>
  );
}
export default Header;
