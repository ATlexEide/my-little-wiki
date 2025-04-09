import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import fetchCharacterData from "./js/characterData";
import info from "../data/info.json";
import CategoryCard from "../components/CategoryCard";
function Home() {
  const categories = [];
  for (const val of Object.values(info.categories)) {
    categories.push(val);
  }
  return (
    <>
      <Header title="Main page" />
      <main id="categories">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            imagePath={category.imagePath + "." + category.fileExtension}
            alt={category.alt}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Home;
