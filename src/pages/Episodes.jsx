import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
function Episodes() {
  return (
    <>
      <Header title={"Characters"} />
      <main id="character-list">
        <Search category="episode" />
      </main>
      <Footer />
    </>
  );
}
export default Episodes;
