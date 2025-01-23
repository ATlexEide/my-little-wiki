//TODO: FIX LINK TO EPISODE PAGE
//<Link to={`/episodes/${target.episode.replace(" ", "")}`}></Link>
import { useEffect, useState } from "react";
import CharacterInformationCard from "./CharacterInformationCard";
import SongInformationCard from "./SongInformationCard";
import EpisodeInformationCard from "./EpisodeInformationCard";
function InformationCard({ category, id }) {
  const [target, setTarget] = useState([]);
  useEffect(() => {
    fetch(`https://ponyapi.net/v1/${category}/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setTarget(res.data[0]);
      })
      .catch((e) => console.log(e));
  }, [category, id]);
  if (category === "character") {
    return <CharacterInformationCard character={target} />;
  }
  if (category === "song") {
    return <SongInformationCard song={target} />;
  }
  if (category === "episode") {
    return <EpisodeInformationCard episode={target} />;
  }
}
export default InformationCard;
