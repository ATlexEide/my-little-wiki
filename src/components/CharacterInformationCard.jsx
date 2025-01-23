function CharacterInformationCard({ character }) {
  console.log(character);
  return (
    <section>
      {/* CHARACTERS */}
      {character.image && (
        <figure>
          <img src={character.image && character.image[0]} alt="" />
          <h1>{character.name}</h1>
          <p>{character.alias && character.alias}</p>
        </figure>
      )}
      {!character.image && <h1>{character.name}</h1>}
      {!character.image && <p>{character.alias && character.alias}</p>}
      {character.sex && (
        <p>
          <b>sex</b>:{character.sex}
        </p>
      )}
      {character.residence && (
        <p>
          <b>Residence</b>: {character.residence}
        </p>
      )}
      {character.occupation && (
        <p>
          <b>Occupation</b>: {character.occupation}
        </p>
      )}
      {character.kind && (
        <p>
          Kind:{" "}
          {character.kind.length > 1
            ? character.kind.slice(0, character.kind.length - 1).join(", ") +
              " and " +
              character.kind[character.kind.length - 1]
            : character.kind[0]}
        </p>
      )}
      <>
        {character.image && <h2>More images:</h2>}
        {character.image &&
          character.image
            .filter((img, index) => index > 0)
            .map((image, index) => {
              return <img key={image + index} src={image} />;
            })}
      </>
    </section>
  );
}
export default CharacterInformationCard;
