function Name({ target }) {
  return (
    <>
      {target.image && (
        <figure id="info-figure">
          <img
            id="figure-image"
            src={target.image && target.image[0]}
            alt={target.name}
          />
          <h1 id="figure-header">{target.name}</h1>
          {target.alias && <p>{target.alias}</p>}
        </figure>
      )}
      {!target.image && <h1>{target.name}</h1>}
      {!target.image && target.alias && <p>{target.alias && target.alias}</p>}
    </>
  );
}
export default Name;
