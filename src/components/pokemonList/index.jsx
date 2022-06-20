/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';

export default function PokemonList(props) {
  return (
    <div className="pokedexDiv">
      <h1>Pokédex</h1>
      <ul className="pokemonList">
        {props.searchInput.length >= 1 || props.typeFilter != 'type-select'
          ? props.filteredResults.map((pokemon, index) => (
              <li
                className={`pokemonLi ${pokemon.types[0].type.name}`}
                key={index}
              >
                <div className="pokemonDetails">
                  <p>{pokemon.name}</p>
                  <ul className="typeContainer">
                    {pokemon.types.map((type, index) => (
                      <li
                        key={index}
                        className={`type ${'t-' + type.type.name}`}
                      >
                        {type.type.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  className="pokeImg"
                  src={pokemon.sprites.front_default}
                  alt="Pokemon image"
                />
              </li>
            ))
          : props.pokeList.map((pokemon, index) => (
              <li
                className={`pokemonLi ${pokemon.types[0].type.name}`}
                key={index}
              >
                <div className="pokemonDetails">
                  <p>{pokemon.name}</p>
                  <ul className="typeContainer">
                    {pokemon.types.map((type, index) => (
                      <li
                        key={index}
                        className={`type ${'t-' + type.type.name}`}
                      >
                        {type.type.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  className="pokeImg"
                  src={pokemon.sprites.front_default}
                  alt="Pokemon image"
                />
              </li>
            ))}
      </ul>
    </div>
  );
}
