import "./Information.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InformationCard from "../components/InformationCard";
import { useParams } from "react-router-dom";
function routeCard(id, category) {
  return (
    <>
      <Header />
      <InformationCard category={category} id={id} />
      <Footer />
    </>
  );
}
function Information({ category }) {
  const { id } = useParams();
  switch (category) {
    case "character":
      return routeCard(id, category);
    case "song":
      return routeCard(id, category);
    case "episode":
      return routeCard(id, category);
    case "comic":
      return routeCard(id, category);

    default:
      break;
  }
}
export default Information;
