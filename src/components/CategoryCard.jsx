import "./CategoryCard.css";
function CategoryCard({ title, imagePath, alt }) {
  return (
    <section>
      <figure>
        <a href="#" className="category-link">
          <img src={`${imagePath}`} alt={alt} />
        </a>
      </figure>
      <h2>{title}</h2>
    </section>
  );
}
export default CategoryCard;
