import Name from "./InfoCardComponents/Name";
import Residence from "./InfoCardComponents/Residence";
import Sex from "./InfoCardComponents/Sex";
import Occupation from "./InfoCardComponents/Occupation";
import Kind from "./InfoCardComponents/Kind";
import Images from "./InfoCardComponents/Images";
import Url from "./InfoCardComponents/Url";
function CharacterInformationCard({ character }) {
  console.log(character);
  return (
    <section id="infocard">
      <Name target={character} />
      <Sex target={character} />
      <Residence target={character} />
      <Occupation target={character} />
      <Kind target={character} />
      <Images target={character} />
      <Url target={character} />
    </section>
  );
}
export default CharacterInformationCard;
