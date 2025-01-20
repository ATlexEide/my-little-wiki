import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import fetchCharacterData from "./js/characterData";
import info from "./data/info.json";
import CategoryCard from "./components/CategoryCard";
import getImageUrl from "../public/getImageUrl";
// fetchCharacterData("rainbow");

function App() {
  const categories = [];
  for (const val of Object.values(info.categories)) {
    categories.push(val);
    console.log(val);
  }
  return (
    <>
      <Header title="My Little Wiki" />
      <main>
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            imagePath={getImageUrl(
              category.title.toLocaleLowerCase(),
              category.fileExtension
            )}
            // imagePath={`${category.imagePath}.${category.fileExtension}`}
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
