function Kind({ target }) {
  return (
    target.kind && (
      <p>
        <b>Kind</b>:{" "}
        {target.kind.length > 1
          ? target.kind.slice(0, target.kind.length - 1).join(", ") +
            " and " +
            target.kind[target.kind.length - 1]
          : target.kind[0]}
      </p>
    )
  );
}
export default Kind;
