import {UnitedPokemon} from '../interfaces/interfacePokemones';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {detailPokemon: UnitedPokemon; color: string};
};
