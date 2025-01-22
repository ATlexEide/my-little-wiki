import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
function Songs() {
  return (
    <>
      <Header title="Songs" />
      <main id="results-container">
        <Search category="song" />
      </main>
      <Footer />
    </>
  );
}
export default Songs;
