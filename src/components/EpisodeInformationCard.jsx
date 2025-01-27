import EpisodeInfo from "./InfoCardComponents/EpisodeInfo";
import Name from "./InfoCardComponents/Name";
import Url from "./InfoCardComponents/Url";
function EpisodeInformationCard({ episode }) {
  return (
    <section id="infocard">
      <Name target={episode} />
      <EpisodeInfo target={episode} />
      <Url target={episode} />
    </section>
  );
}
export default EpisodeInformationCard;
