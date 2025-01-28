function SongInfo({ target }) {
  return (
    <>
      {target.episode && (
        <p>
          <b>Episode</b>: {target.episode}
        </p>
      )}
      {target.musicby && (
        <p>
          <b>Music by</b>: {target.musicby}
        </p>
      )}
      {target.lyricsby && (
        <p>
          <b>Lyrics by</b>: {target.lyricsby}
        </p>
      )}
      {target.keysignature && (
        <p>
          <b>Key signature</b>: {target.keysignature}
        </p>
      )}
    </>
  );
}
export default SongInfo;
