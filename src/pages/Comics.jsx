import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
function Comics() {
  return (
    <>
      <Header title={"Characters"} />
      <main id="results-container">
        <Search category="comics-story" />
      </main>
      <Footer />
    </>
  );
}
export default Comics;
