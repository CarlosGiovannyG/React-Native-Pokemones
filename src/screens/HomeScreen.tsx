import React, {useContext} from 'react';
import {View, Image, FlatList, ActivityIndicator, Text} from 'react-native';
import {PokemonCard} from '../components/PokemonCard';
import {ThemeContext} from '../context/ThemeContext';
import {usePokewmon} from '../hooks/usePokemon';
import {appTheme} from '../styles/appTheme';
import {globalTheme} from '../styles/globalTheme';

const HomeScreen = () => {
  const {
    theme: {
      colors: {primary, text},
    },
  } = useContext(ThemeContext);

  const {pokemonsList, getPokemons, isLoading, finishLoading} = usePokewmon();

  return (
    <View style={[appTheme.stContainer, globalTheme.globalMargin]}>
      <Image
        style={appTheme.stImageBG}
        source={require('../assets/pokebola.png')}
      />

      <View style={appTheme.stContainerFlat}>
        <FlatList
          // header
          ListHeaderComponent={
            <Text
              style={[appTheme.stTitle, globalTheme.globalTop, {color: text}]}>
              Pokemones App
            </Text>
          }
          // data a renderizar
          data={pokemonsList}
          keyExtractor={pokemon => pokemon.id}
          renderItem={({item}) => (
            <PokemonCard
              isLoading={isLoading}
              finishLoading={finishLoading}
              pokemon={item}
            />
          )}
          numColumns={2}
          // infinite scroll
          onEndReached={getPokemons}
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <ActivityIndicator
              style={appTheme.stIndicator}
              size={20}
              color={primary}
            />
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;
