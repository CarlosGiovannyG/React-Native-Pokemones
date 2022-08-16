import {StackScreenProps} from '@react-navigation/stack';
import {ImageStyle, StyleProp, ViewStyle} from 'react-native';
import {RootStackParams} from '../types/typeNavigation';
import {DetailPokemon, UnitedPokemon} from './interfacePokemones';

export interface PropsFadeImage {
  uri: string;
  style?: StyleProp<ImageStyle>;
  isLoading: boolean;
  finishLoading: () => void;
}

export interface PropsCardPokemon {
  pokemon: UnitedPokemon;
  isLoading: boolean;
  finishLoading: () => void;
}

export interface PropsPokemonScreen
  extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export interface PropsPokemonDetails {
  pokemon: DetailPokemon;
  isLoading: boolean;
  finishLoading: () => void;
}

export interface PropsSearchInput {
  onDebounce: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}
