import "./CategoryCard.css";
function CategoryCard({ title, imagePath, alt }) {
  return (
    <a href="#" className="category-link">
      <section>
        <figure>
          <img src={`${imagePath}`} alt={alt} />
        </figure>
        <h2>{title}</h2>
      </section>
    </a>
  );
}
export default CategoryCard;
