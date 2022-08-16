import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PokemonesDB,
  Result,
  UnitedPokemon,
} from '../interfaces/interfacePokemones';

export const usePokemonSearch = () => {
  // const url = 'https://pokeapi.co/api/v2/pokemon/?limit=40';
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonsListSeacrh, setPokemonsListSeacrh] = useState<UnitedPokemon[]>(
    [],
  );

  const mapPokemons = async (listPokemons: Result[]) => {
    const newPokemonList = listPokemons.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {
        id,
        picture,
        name,
      };
    });
    setPokemonsListSeacrh(newPokemonList);
    setIsLoading(false);
  };

  const getPokemons = async () => {
    const response = await pokemonApi.get<PokemonesDB>(
      'https://pokeapi.co/api/v2/pokemon/?limit=1200',
    );
    mapPokemons(response.data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const finishLoading = () => {
    setIsLoading(false);
  };

  return {pokemonsListSeacrh, isLoading,finishLoading};
};
