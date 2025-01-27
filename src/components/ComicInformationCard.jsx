import Credits from "./InfoCardComponents/Credits";
import Issue from "./InfoCardComponents/Issue";
import Name from "./InfoCardComponents/Name";
import Url from "./InfoCardComponents/Url";
function ComicInformationCard({ comic }) {
  return (
    <section id="infocard">
      <Name target={comic} />
      <Issue target={comic} />
      <Credits target={comic} />
      <Url target={comic} />
    </section>
  );
}
export default ComicInformationCard;
