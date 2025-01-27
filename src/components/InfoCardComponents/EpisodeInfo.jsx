function EpisodeInfo({ target }) {
  return (
    <>
      {" "}
      {target.episode && (
        <p>
          <b>Episode</b>: {target.episode}
        </p>
      )}
      {target.season && (
        <p>
          <b>Season</b>: {target.season}
        </p>
      )}
      {target.song && (
        <p>
          <b>Songs</b>:{" "}
          {target.song.length > 1
            ? target.song.slice(0, target.song.length - 1).join(", ") +
              " and " +
              target.song[target.song.length - 1]
            : target.song[0]}
        </p>
      )}
      {target.overall && (
        <p>
          <b>Overall</b>: {target.overall}
        </p>
      )}
      {target.airdate && (
        <p>
          <b>Aired</b>: {target.airdate}
        </p>
      )}
      {target.writtenby && (
        <p>
          <b>Written by</b>: {target.writtenby}
        </p>
      )}
      {target.storyboard && (
        <p>
          <b>Storyboard</b>:{target.storyboard}
        </p>
      )}
    </>
  );
}
export default EpisodeInfo;
