// code taken from here:
// https://daily-dev-tips.com/posts/remix-loading-data-from-an-external-api/

export async function getPokemons() {
    const res = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    ).then((res) => res.json());
  
    return res.results;
  }

  export async function getPokemon(name: string | undefined) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (res) => res.json()
    );
  
    return {
      name: name,
      frontImg: res.sprites.front_shiny,
      backImg: res.sprites.back_shiny,
    };
  }