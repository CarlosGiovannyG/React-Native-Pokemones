import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {DetailPokemon} from '../interfaces/interfacePokemones';

export const usePokemonDetail = (id: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  const [isLoading, setIsLoading] = useState(true);
  const [pokemonDetails, setPokemonDetails] = useState<DetailPokemon>(
    {} as DetailPokemon,
  );

  const getPokemon = async () => {
    setIsLoading(true);
    const response = await pokemonApi.get<DetailPokemon>(url);
    setPokemonDetails(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const finishLoading = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    finishLoading,
    pokemonDetails,
  };
};
