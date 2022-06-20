/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';

export default function SearchBar(props) {
  return (
    <div className="searchDiv">
      <div className="searchBarDiv">
        <input
          type="text"
          name="pokeSearch"
          id="pokeSearch"
          onChange={(e) => props.searchItems(e.target.value, 'type-select')}
          placeholder="Pesquisar pokemon..."
        />
        <button onClick={props.filterArray}>
          <img src="../../assets/search-icon.svg" alt="Search icon" />
        </button>
      </div>
      <select
        name="typeSelect"
        id="typeSelect"
        onChange={(e) => props.searchItems('', e.target.value.toLowerCase())}
      >
        <option value="type-select">Selecione um tipo</option>
        <option value="Normal">Normal</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Electric">Electric</option>
        <option value="Grass">Grass</option>
        <option value="Ice">Ice</option>
        <option value="Fighting">Fighting</option>
        <option value="Poison">Poison</option>
        <option value="Ground">Ground</option>
        <option value="Flying">Flying</option>
        <option value="Psychic">Psychic</option>
        <option value="Bug">Bug</option>
        <option value="Rock">Rock</option>
        <option value="Ghost">Ghost</option>
        <option value="Dragon">Dragon</option>
        <option value="Dark">Dark</option>
        <option value="Steel">Steel</option>
      </select>
    </div>
  );
}
