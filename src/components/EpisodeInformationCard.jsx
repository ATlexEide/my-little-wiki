function EpisodeInformationCard({ episode }) {
  return (
    <section>
      {/* EPISODE */}
      {episode.image && (
        <figure>
          <img src={episode.image} alt="" />
          <h1>{episode.name}</h1>
          <p>{episode.alias && episode.alias}</p>
        </figure>
      )}
      {!episode.image && <h1>{episode.name}</h1>}
      {episode.episode && (
        <p>
          <b>Episode</b>: {episode.episode}
        </p>
      )}
      {episode.season && (
        <p>
          <b>Season</b>: {episode.season}
        </p>
      )}
      {episode.song && (
        <p>
          <b>Songs</b>:{" "}
          {episode.song.length > 1
            ? episode.song.slice(0, episode.song.length - 1).join(", ") +
              " and " +
              episode.song[episode.song.length - 1]
            : episode.song[0]}
        </p>
      )}
      {episode.overall && (
        <p>
          <b>Overall</b>: {episode.overall}
        </p>
      )}
      {episode.airdate && (
        <p>
          <b>Aired</b>: {episode.airdate}
        </p>
      )}
      {episode.writtenby && (
        <p>
          <b>Written by</b>: {episode.writtenby}
        </p>
      )}
      {episode.storyboard && (
        <p>
          <b>Storyboard</b>:{episode.storyboard}
        </p>
      )}
      {episode.url && <a href={episode.url}>Fandom wiki page</a>}
    </section>
  );
}
export default EpisodeInformationCard;
