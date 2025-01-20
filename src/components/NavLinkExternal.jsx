function NavLinkExternal({ link, text, fontSize = "2rem" }) {
  return (
    <li>
      <a
        style={{ fontSize: fontSize }}
        target="_blank"
        rel="noreferrer"
        href={link}
      >
        {text}
      </a>
    </li>
  );
}
export default NavLinkExternal;
