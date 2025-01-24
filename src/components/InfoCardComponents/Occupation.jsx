function Occupation({ target }) {
  return (
    target.occupation && (
      <p>
        <b>Occupation</b>: {target.occupation}
      </p>
    )
  );
}
export default Occupation;
