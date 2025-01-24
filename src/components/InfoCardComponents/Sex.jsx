function Sex({ target }) {
  return (
    target.sex && (
      <p>
        <b>sex</b>:{target.sex}
      </p>
    )
  );
}

export default Sex;
