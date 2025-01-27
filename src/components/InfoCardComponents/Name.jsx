function Name({ target }) {
  return (
    <>
      {console.log(target)}
      {target.image && (
        <figure id="info-figure">
          <img
            id="figure-image"
            src={target.image && target.image}
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
