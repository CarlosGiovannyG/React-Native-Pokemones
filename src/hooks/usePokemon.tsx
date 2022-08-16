import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PokemonesDB,
  Result,
  UnitedPokemon,
} from '../interfaces/interfacePokemones';

export const usePokewmon = () => {
  // const url = 'https://pokeapi.co/api/v2/pokemon/?limit=40';
  const nextUrl = useRef('https://pokeapi.co/api/v2/pokemon/?limit=40');
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonsList, setPokemonsList] = useState<UnitedPokemon[]>([]);

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
    setPokemonsList([...pokemonsList, ...newPokemonList]);
    setIsLoading(false);
  };

  const getPokemons = async () => {
    setIsLoading(true);
    const response = await pokemonApi.get<PokemonesDB>(nextUrl.current);
    nextUrl.current = response.data.next;
    mapPokemons(response.data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const finishLoading = () => {
    setIsLoading(false);
  };

  return {pokemonsList, isLoading, getPokemons,finishLoading};
};
