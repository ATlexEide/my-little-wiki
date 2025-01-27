function Credits({ target }) {
  return (
    <>
      {target.writer && (
        <p>
          <b>Writer</b>: {target.writer}
        </p>
      )}
      {target.artist && (
        <p>
          <b>Artist</b>: {target.artist}
        </p>
      )}
      {target.colorist && (
        <p>
          <b>Colorist</b>: {target.colorist}
        </p>
      )}
      {target.letterer && (
        <p>
          <b>Letterer</b>: {target.letterer}
        </p>
      )}
      {target.editor && (
        <p>
          <b>Editor</b>: {target.editor}
        </p>
      )}
    </>
  );
}
export default Credits;
