import Name from "./InfoCardComponents/Name";
import Video from "./InfoCardComponents/Video";
import SongInfo from "./InfoCardComponents/SongInfo";
import Url from "./InfoCardComponents/Url";
function SongInformationCard({ song }) {
  return (
    <section id="infocard">
      <Name target={song} />
      <Video target={song} />
      <SongInfo target={song} />
      <Url target={song} />
    </section>
  );
}
export default SongInformationCard;
