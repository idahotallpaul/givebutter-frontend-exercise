import { useEffect, useState } from "react";
import {
  fetchAllPokemon,
  fetchPokemonDetailsByName,
  fetchEvolutionChainById,
} from "./api";
import { Details } from "./Details";

export default function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState();

  // CHANGE HANDLERS

  const onSearchValueChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const onGetDetails = (name) => () => {
    setSelectedPokemon(name);
  };

  // EFFECTS

  // initial data load
  useEffect(() => {
    const fetchPokemon = async () => {
      const { results } = await fetchAllPokemon();
      setAllPokemon(results);
    };

    fetchPokemon();
  }, []);

  // fetch details when a pokemon is selected
  useEffect(() => {
    const fetchDetails = async (name) => {
      const details = await fetchPokemonDetailsByName(name);
      const { id, types, moves } = details;

      const evolutions = await fetchEvolutionChainById(id);
      const allDetails = { name, types, moves, evolutions };

      setSelectedPokemonDetails({ ...allDetails });
    };

    selectedPokemon && fetchDetails(selectedPokemon);
  }, [selectedPokemon]);

  // filter the list as searchValue changes
  useEffect(() => {
    const filteredList = allPokemon.filter((monster) =>
      monster.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredPokemon(filteredList);
  }, [allPokemon, searchValue]);

  // FRAGMENTS

  const listItems = filteredPokemon.map((monster) => {
    return (
      <div className={"pokedex__list-item"} key={monster.name}>
        {monster.name}
        <button onClick={onGetDetails(monster.name)}>Get Details</button>
      </div>
    );
  });

  return (
    <div className={"pokedex__container"}>
      <div className={"pokedex__search-input"}>
        <input
          defaultValue={searchValue}
          onChange={onSearchValueChange}
          placeholder={"Search Pokemon"}
        />
      </div>
      <div className={"pokedex__content"}>
        {listItems.length > 0 ? (
          <>
            <div className={"pokedex__search-results"}>{listItems}</div>
            {selectedPokemonDetails && (
              <Details data={selectedPokemonDetails} />
            )}
          </>
        ) : (
          "No Results Found"
        )}
      </div>
    </div>
  );
}
