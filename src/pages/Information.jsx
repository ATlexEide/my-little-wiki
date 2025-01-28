import "./Information.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InformationCard from "../components/InformationCard";
import { useParams } from "react-router-dom";
function routeCard(id, category, title) {
  return (
    <>
      <Header title={title} />
      <InformationCard category={category} id={id} />
      <Footer />
    </>
  );
}
function Information({ category }) {
  let title;
  const { id } = useParams();
  switch (category) {
    case "character":
      title = "Character";
      return routeCard(id, category, title);
    case "song":
      title = "Song";
      return routeCard(id, category, title);
    case "episode":
      title = "Episode";
      return routeCard(id, category, title);
    case "comics-story":
      title = "Comic";
      return routeCard(id, category, title);

    default:
      break;
  }
}
export default Information;
