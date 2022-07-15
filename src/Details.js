import { useEffect, useState } from "react";

export function Details(props) {
  const { name, types, moves, evolutions } = props.data;
  const [evolutionChain, setEvolutionChain] = useState([]);

  // EFFECTS

  useEffect(() => {
    // add original name to array
    let tempChain = [name];
    // set evolutionsData to the first level of the chain
    let evolutionsData = evolutions.chain;

    const getEvolutions = () => {
      // recurse through chain to add additional names
      do {
        let numberOfEvolutions = evolutionsData.evolves_to.length;
        tempChain.push(evolutionsData.species.name);

        if (numberOfEvolutions > 1) {
          for (let i = 1; i < numberOfEvolutions; i++) {
            tempChain.push(evolutionsData.evolves_to[i].species.name);
          }
        }

        // set evolutionsData to the next level of the chain
        evolutionsData = evolutionsData.evolves_to[0];
      } while (
        evolutionsData !== undefined &&
        evolutionsData.hasOwnProperty("evolves_to")
      );

      setEvolutionChain(tempChain);
    };

    name && evolutions && getEvolutions();
  }, [evolutions, name]);

  // FRAGMENTS

  const typesList = types.map((type, index) => (
    <li key={index}>{type.type.name}</li>
  ));

  const movesList = moves.map((move, index) => (
    <li key={index}>{move.move.name}</li>
  ));

  const evolutionsList = evolutionChain.map((evolution, index) => (
    <span key={index}>{evolution}</span>
  ));

  return (
    <div className={"pokedex__details"}>
      <h4 className="pokedex__details-name">{name}</h4>
      <div className="pokedex__details-types">
        <h4>Types</h4>
        <ul>{typesList}</ul>
      </div>
      <div className="pokedex__details-moves">
        <h4>Moves</h4>
        <ul>{movesList}</ul>
      </div>
      <div className="pokedex__details-evolutions">
        <h4>Evolutions</h4>
        <div>{evolutionsList}</div>
      </div>
    </div>
  );
}
