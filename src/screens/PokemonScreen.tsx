import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {FadeInImage} from '../components/FadeImage';
import {PokemonDetail} from '../components/PokemonDetail';
import {ThemeContext} from '../context/ThemeContext';
import {usePokemonDetail} from '../hooks/usePokemonDetail';
import {PropsPokemonScreen} from '../interfaces/interfacesProps';
import {pokemonTheme} from '../styles/pokemonTheme';

const PokemonScreen = ({route, navigation}: PropsPokemonScreen) => {
  const {
    theme: {
      dark,
      colors: {text},
    },
  } = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  const {color, detailPokemon} = route.params;
  const {id, name, picture} = detailPokemon;
  const {finishLoading, isLoading, pokemonDetails} = usePokemonDetail(id);

  return (
    <View style={pokemonTheme.stContainer}>
      {/* POKEMON HEADER */}

      <View style={[pokemonTheme.stContainerHeader, {backgroundColor: color}]}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.pop()}
          style={[pokemonTheme.stBackButton, {top: top + 10}]}>
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>

        <Text style={[pokemonTheme.stPokName, {color: text, top: top + 40}]}>
          {name}
          {'\n# ' + id}
        </Text>

        <Image
          style={pokemonTheme.stPokeBola}
          source={
            dark
              ? require('../assets/pokebola-negra.png')
              : require('../assets/pokebola-gris.png')
          }
        />
        <FadeInImage
          uri={picture}
          style={pokemonTheme.stPokeImage}
          isLoading={isLoading}
          finishLoading={finishLoading}
        />
      </View>

      {/* POKEMON DATA  */}
      {isLoading ? (
        <View style={pokemonTheme.stLoading}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetail
          pokemon={pokemonDetails}
          isLoading={isLoading}
          finishLoading={finishLoading}
        />
      )}
    </View>
  );
};

export default PokemonScreen;
