function Sex({ target }) {
  return (
    target.sex && (
      <p>
        <b>Sex</b>:{target.sex}
      </p>
    )
  );
}

export default Sex;
