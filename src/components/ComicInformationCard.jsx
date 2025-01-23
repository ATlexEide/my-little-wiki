function ComicInformationCard({ comic }) {
  return (
    <section id="infocard">
      {comic.image && (
        <figure>
          <img src={comic.image} alt="" />
          <h1>{comic.name}</h1>
          <p>{comic.alias && comic.alias}</p>
        </figure>
      )}
      {!comic.image && <h1>{comic.name}</h1>}
      {comic.series && (
        <p>
          <b>Series</b>: {comic.series}
        </p>
      )}
      {comic.issue && (
        <p>
          <b>Issue</b>:{" "}
          {comic.issue.length > 1
            ? comic.issue.slice(0, comic.issue.length - 1).join(", ") +
              " and " +
              comic.issue[comic.issue.length - 1]
            : comic.issue[0]}
        </p>
      )}
      {comic.writer && (
        <p>
          <b>Writer</b>: {comic.writer}
        </p>
      )}
      {comic.artist && (
        <p>
          <b>Artist</b>: {comic.artist}
        </p>
      )}
      {comic.colorist && (
        <p>
          <b>Colorist</b>: {comic.colorist}
        </p>
      )}
      {comic.letterer && (
        <p>
          <b>Letterer</b>: {comic.letterer}
        </p>
      )}
      {comic.editor && (
        <p>
          <b>Editor</b>: {comic.editor}
        </p>
      )}
      {comic.url && <a href={comic.url}>Fandom wiki page</a>}
    </section>
  );
}
export default ComicInformationCard;
