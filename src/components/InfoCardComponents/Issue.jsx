function Issue({ target }) {
  return (
    <>
      {target.series && (
        <p>
          <b>Series</b>: {target.series}
        </p>
      )}
      {target.issue && (
        <p>
          <b>Issue</b>:{" "}
          {target.issue.length > 1
            ? target.issue.slice(0, target.issue.length - 1).join(", ") +
              " and " +
              target.issue[target.issue.length - 1]
            : target.issue[0]}
        </p>
      )}
    </>
  );
}
export default Issue;
