import { useEffect, useState } from "react";
function InformationCard({ category, id }) {
  const [target, setTarget] = useState([]);
  useEffect(() => {
    fetch(`https://ponyapi.net/v1/${category}/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setTarget(res.data[0]);
      })
      .catch((e) => console.log(e));
  }, [category, id]);

  return (
    <section>
      {target.image && (
        <figure>
          <img src={target.image && target.image[0]} alt="" />
          <h1>{target.name}</h1>
          <p>{target.alias && target.alias}</p>
        </figure>
      )}
      {!target.image && <h1>{target.name}</h1>}
      {!target.image && <p>{target.alias && target.alias}</p>}
      {target.sex && (
        <p>
          <b>sex</b>:{target.sex}
        </p>
      )}
      {target.residence && (
        <p>
          <b>Residence</b>: {target.residence}
        </p>
      )}
      {target.occupation && (
        <p>
          <b>Occupation</b>: {target.occupation}
        </p>
      )}
      {target.kind && (
        <p>
          Kind:{" "}
          {target.kind.length > 1
            ? target.kind.slice(0, target.kind.length - 1).join(", ") +
              " and " +
              target.kind[target.kind.length - 1]
            : target.kind[0]}
        </p>
      )}
      <>
        {target.image && <h2>More images:</h2>}
        {target.image &&
          target.image
            .filter((img, index) => index > 0)
            .map((image, index) => {
              return <img key={image + index} src={image} />;
            })}
      </>
      {target.url && <a href={target.url}>Fandom wiki page</a>}
    </section>
  );
}
export default InformationCard;
