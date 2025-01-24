function Residence({ target }) {
  return (
    target.residence && (
      <p>
        <b>Residence</b>: {target.residence}
      </p>
    )
  );
}
export default Residence;
