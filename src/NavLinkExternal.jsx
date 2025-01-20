function NavLinkExternal({ link, text }) {
  return (
    <li>
      <a target="_blank" rel="noreferrer" href={link}>
        {text}
      </a>
    </li>
  );
}
export default NavLinkExternal;
