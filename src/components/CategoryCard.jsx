import "./CategoryCard.css";
import { Link } from "react-router-dom";
function CategoryCard({ title, imagePath, alt }) {
  return (
    <Link to={`./${title}`} className="category-link">
      <section>
        <figure>
          <img src={`${imagePath}`} alt={alt} />
        </figure>
        <h2>{title}</h2>
      </section>
    </Link>
  );
}
export default CategoryCard;
