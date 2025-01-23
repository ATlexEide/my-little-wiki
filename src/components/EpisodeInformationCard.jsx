function EpisodeInformationCard({ episode }) {
  return (
    <section>
      {/* EPISODE */}
      {episode.season && (
        <p>
          <b>Season</b>: {episode.season}
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
