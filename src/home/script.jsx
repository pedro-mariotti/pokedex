export const getPokemon = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await res.json();
    const genericPokeArray = data.results;
    let pokeArray = [];
    // console.log(genericPokeArray);

    for await (let i of genericPokeArray) {
      const response = await fetch(
        genericPokeArray[genericPokeArray.indexOf(i)].url
      );
      const pokeData = await response.json();
      pokeArray[genericPokeArray.indexOf(i)] = pokeData;
    }
    return pokeArray;
    // console.log(pokeData);
  } catch (error) {
    return { error: error.message };
  }
};
