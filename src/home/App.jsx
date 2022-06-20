import './App.css';
import PokemonList from '../components/pokemonList';
import SearchBar from '../components/searchbar';
import React, { useState, useEffect } from 'react';
import { getPokemon } from './script';

function App() {
  //Parte de listagem da API
  const [pokemon, setPokemon] = useState(
    /*estado inicial:*/ {
      loading: true,
      data: null,
      error: null,
    }
  );
  //Parte de busca
  const [searchInput, setSearchInput] = useState('');
  const [typeFilter, setTypeFilter] = useState('type-select');
  const [filteredResults, setFilteredResults] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  let canceled = false;

  useEffect(
    () => {
      if (canceled) return;

      getPokemon()
        .then((pokeArray) => {
          setPokemon((currentPokemon) => ({
            ...currentPokemon,
            data: pokeArray,
            loading: false,
          }));
        })
        .catch((error) => {
          setPokemon({
            data: null,
            error: error.message,
            loading: false,
          });
        });
      return () => {
        // cleanup function
        canceled = true;
      };
    },

    /*dependencias:*/ []
  );

  useEffect(() => {
    setFilteredResults(filteredData);
  }, [filteredData]);

  const searchItems = (searchTerm, typeFilterParam) => {
    if (searchTerm !== '') {
      console.log('Entra no setSearch');
      setSearchInput(searchTerm);
    }
    if (typeFilterParam !== 'type-select') {
      console.log('Entra no setTypeFilter');
      setTypeFilter(typeFilterParam);
    }
    console.log('typeFilter = ', typeFilter);
    console.log('searchInput = ', searchInput);
    if (searchTerm !== '' || typeFilter !== 'type-select') {
      setFilteredData(
        pokemon.data.filter((item) => {
          if (searchTerm !== '' && typeFilter !== 'type-select') {
            console.log('Entra no if 1');
            return Object.values(item)
              .join('')
              .toLowerCase()
              .includes(typeFilter.toLowerCase())
              .includes(searchTerm.toLowerCase());
          }
          if (searchTerm !== '') {
            console.log('Entra if 2');
            return Object.values(item.name)
              .join('')
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          }
          if (typeFilter !== 'type-select') {
            console.log('Entra if 3');
            return Object.values(item.types)
              .join('')
              .toLowerCase()
              .includes(typeFilter.toLowerCase());
          }
        })
      );
    } else {
      setFilteredResults(pokemon.data);
    }
  };

  if (pokemon.loading) {
    return <div className="loadingDiv">Loading...</div>;
  }

  // console.log(pokemon);

  return (
    <div className="App">
      <header>
        <img src="../../assets/pokeball.svg" alt="Pokeball logo" />
      </header>
      <main>
        <section id="listSection">
          <SearchBar searchItems={searchItems} />
          <PokemonList
            searchInput={searchInput}
            typeFilter={typeFilter}
            filteredResults={filteredResults}
            pokeList={pokemon.data}
          />
        </section>
      </main>
      <footer>
        <p>Com 💛 InfoJr</p>
      </footer>
    </div>
  );
}

export default App;
