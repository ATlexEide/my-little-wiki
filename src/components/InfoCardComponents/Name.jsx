function Name({ target }) {
  return (
    <>
      {target.image && (
        <figure>
          <img src={target.image && target.image[0]} alt={target.name} />
          <h1>{target.name}</h1>
          <p>{target.alias && target.alias}</p>
        </figure>
      )}
      {!target.image && <h1>{target.name}</h1>}
      {!target.image && <p>{target.alias && target.alias}</p>}
    </>
  );
}
export default Name;
