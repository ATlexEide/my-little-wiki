import "./Characters.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";

function Characters() {
  return (
    <>
      <Header title={"Characters"} />
      <main id="character-list">
        <Search />
      </main>
      <Footer />
    </>
  );
}
export default Characters;
