import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import fetchCharacterData from "./data/characterData";
import info from "./data/info.json";
import CategoryCard from "./components/CategoryCard";
fetchCharacterData("rainbow");
function App() {
  const categories = [];
  for (const val of Object.values(info.categories)) {
    categories.push(val);
    console.log(val);
  }
  // DONT TOUCH - IMAGES HARD
  function getImageUrl(name) {
    // note that this does not include files in subdirectories
    return new URL(`./assets/${name}.png`, import.meta.url).href;
  }
  return (
    <>
      <Header title="My Little Wiki" />
      <main>
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            imagePath={getImageUrl(category.title.toLocaleLowerCase())}
            alt={category.alt}
          />
        ))}
      </main>
      <Footer
        title="A &copy;KodeHode Project"
        author="Alexander"
        linkSize="1em"
      />
    </>
  );
}

export default App;
