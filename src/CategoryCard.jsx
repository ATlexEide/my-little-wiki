import "./CategoryCard.css";
function CategoryCard({ title, imagePath, alt }) {
  return (
    <div>
      <figure>
        <img width={"30%"} src={`${imagePath}`} alt={alt} />
        <figcaption></figcaption>
      </figure>
      <h2>{title}</h2>
    </div>
  );
}
export default CategoryCard;
