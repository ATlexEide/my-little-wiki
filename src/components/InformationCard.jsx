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
      <figure>
        <img src={target.image && target.image[0]} alt="" />
      </figure>
      <h1>{target.name}</h1>
      <p>{target.alias && target.alias}</p>
      {target.residence && <p>Residence: {target.residence}</p>}
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
    </section>
  );
}
export default InformationCard;
