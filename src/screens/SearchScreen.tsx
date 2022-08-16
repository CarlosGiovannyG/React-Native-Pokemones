import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Keyboard,
  Platform,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {ThemeContext} from '../context/ThemeContext';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {UnitedPokemon} from '../interfaces/interfacePokemones';
import {globalTheme} from '../styles/globalTheme';
import {searchTheme} from '../styles/searchTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {
    theme: {
      colors: {primary, text},
    },
  } = useContext(ThemeContext);
  const {finishLoading, isLoading, pokemonsListSeacrh} = usePokemonSearch();
  const [termSeacrh, setTermSeacrh] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<UnitedPokemon[]>([]);

  useEffect(() => {
    if (termSeacrh.length === 0) {
      return setPokemonFiltered([]);
    }
    if (isNaN(Number(termSeacrh))) {
      if (termSeacrh.length > 1) {
        setPokemonFiltered(
          pokemonsListSeacrh.filter(poke =>
            poke.name.toLowerCase().includes(termSeacrh.toLocaleLowerCase()),
          ),
        );
        setTimeout(() => {
          Keyboard.dismiss();
        }, 1000);
      }
    } else {
      const pokeId = pokemonsListSeacrh.find(poke => poke.id === termSeacrh);
      setPokemonFiltered(pokeId ? [pokeId] : []);
      setTimeout(() => {
        Keyboard.dismiss();
      }, 1000);
    }
  }, [termSeacrh]);

  if (isLoading) {
    return (
      <View style={searchTheme.stLoading}>
        <ActivityIndicator size={50} color="grey" />
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={[searchTheme.container, globalTheme.globalMargin]}>
      <SearchInput
        onDebounce={setTermSeacrh}
        style={{
          ...searchTheme.stInput,
          top: Platform.OS === 'ios' ? top : top + 20,
          width: screenWidth - 40,
        }}
      />
      <View
        style={{
          top: Platform.OS === 'ios' ? top + 50 : top + 70,
        }}>
        <FlatList
          // header
          ListHeaderComponent={
            <Text
              style={{
                ...searchTheme.stTitle,
                color: text,
              }}>
              {termSeacrh}
            </Text>
          }
          // data a renderizar
          data={pokemonFiltered}
          keyExtractor={pokemon => pokemon.id}
          renderItem={({item}) => (
            <PokemonCard
              isLoading={isLoading}
              finishLoading={finishLoading}
              pokemon={item}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
