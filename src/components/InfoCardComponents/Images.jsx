function Images({ target }) {
  return (
    <>
      {target.image && <h2>More images:</h2>}
      {target.image &&
        target.image
          .filter((img, index) => index > 0)
          .map((image, index) => {
            return <img key={image + index} src={image} />;
          })}
    </>
  );
}
export default Images;
