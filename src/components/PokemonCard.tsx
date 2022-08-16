import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import ImageColors from 'react-native-image-colors';
import {ThemeContext} from '../context/ThemeContext';
import {PropsCardPokemon} from '../interfaces/interfacesProps';
import {cardTheme} from '../styles/cardTheme';
import {FadeInImage} from './FadeImage';

const windowWidth = Dimensions.get('window').width;

export const PokemonCard = ({
  pokemon,
  finishLoading,
  isLoading,
}: PropsCardPokemon) => {
  const navigation = useNavigation();
  const {
    theme: {
      ownColors: {titlePokemon},
      dark,
    },
  } = useContext(ThemeContext);
  const [bgColor, setBgColor] = useState('');
  const isMounted = useRef(true);

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {fallback: 'grey'}).then(colors => {
      if (!isMounted.current) {
        return;
      }

      if (colors.platform === 'android') {
        setBgColor(colors.dominant || 'grey');
      }
      if (colors.platform === 'ios') {
        setBgColor(colors.background || 'grey');
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          detailPokemon: pokemon,
          color: bgColor,
        })
      }>
      <View
        style={[
          cardTheme.stContainer,
          {width: windowWidth * 0.4, backgroundColor: bgColor},
        ]}>
        <View>
          <Text style={[cardTheme.stNamePok, {color: titlePokemon}]}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>

          <View style={cardTheme.stContainerPokeBola}>
            <Image
              style={cardTheme.stPokeBola}
              source={
                dark
                  ? require('../assets/pokebola-negra.png')
                  : require('../assets/pokebola-gris.png')
              }
            />
          </View>
        </View>
        <FadeInImage
          uri={pokemon.picture}
          style={cardTheme.stPokwmonImage}
          isLoading={isLoading}
          finishLoading={finishLoading}
        />
      </View>
    </TouchableOpacity>
  );
};
