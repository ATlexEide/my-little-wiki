import Name from "./InfoCardComponents/Name";
function SongInformationCard({ song }) {
  return (
    <section id="infocard">
      {/* SONGS */}
      <Name target={song} />
      {song.length && <p>00:01:50</p>}
      {song.video && (
        <>
          <a target="_blank" href={song.video}>
            Video
          </a>
          <iframe src={song.video.replace("watch?v=", "embed/")}></iframe>
        </>
      )}
      {song.episode && (
        <p>
          <b>Episode</b>
          {song.episode}
        </p>
      )}
      {song.musicby && (
        <p>
          <b>Music by</b>:{song.musicby}
        </p>
      )}
      {song.lyricsby && (
        <p>
          <b>Lyrics by</b>:{song.lyricsby}
        </p>
      )}
      {song.keysignature && (
        <p>
          <b>Key signature</b>:{song.keysignature}
        </p>
      )}
      {song.url && <a href={song.url}>Fandom wiki page</a>}
    </section>
  );
}
export default SongInformationCard;
