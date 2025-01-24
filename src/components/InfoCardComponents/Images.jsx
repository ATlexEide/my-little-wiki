function Images({ target }) {
  return (
    <div id="gallery">
      {target.image && <h2>More images:</h2>}
      <div id="images">
        {target.image &&
          target.image
            .filter((img, index) => index > 0)
            .map((image, index) => {
              return <img key={image + index} src={image} />;
            })}
      </div>
    </div>
  );
}
export default Images;
