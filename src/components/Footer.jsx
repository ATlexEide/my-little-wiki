import "./Footer.css";
import NavLinkExternal from "./NavLinkExternal.jsx";
function Footer({
  title = "A KodeHode Project",
  author = "Alexander",
  linkSize = "1em",
}) {
  const fontSize = linkSize;
  return (
    <footer>
      <span>
        {title} by {author}
      </span>
      <nav>
        <ul>
          <NavLinkExternal
            fontSize={fontSize}
            link="https://github.com/ATlexEide/KHFEU04-API"
            text="Repo"
          />
          <NavLinkExternal
            fontSize={fontSize}
            link="https://ponyapi.net/"
            text="API"
          />
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
