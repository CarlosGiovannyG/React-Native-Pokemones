import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {PropsPokemonDetails} from '../interfaces/interfacesProps';
import {pokemonDetailTheme} from '../styles/pokemonDetailTheme';
import {FadeInImage} from './FadeImage';

export const PokemonDetail = ({
  pokemon,
  finishLoading,
  isLoading,
}: PropsPokemonDetails) => {
  const {name, types, weight, sprites, abilities, moves, stats} = pokemon;

  return (
    <ScrollView
      style={{...StyleSheet.absoluteFillObject}}
      showsVerticalScrollIndicator={false}>
      {/* TYPES */}
      <View style={[pokemonDetailTheme.container, {marginTop: 300}]}>
        <Text style={pokemonDetailTheme.stTitle}>Types</Text>
        <View style={pokemonDetailTheme.stContainerTypes}>
          {types &&
            types.map(({type}) => (
              <Text style={pokemonDetailTheme.stRegularText} key={type.name}>
                {type.name}{' '}
              </Text>
            ))}
        </View>
        <Text style={pokemonDetailTheme.stTitle}>Peso</Text>
        <Text style={pokemonDetailTheme.stRegularText}>{weight}kg</Text>
      </View>
      {/* SPRITES */}
      <View style={pokemonDetailTheme.stContainerStripes}>
        <Text style={pokemonDetailTheme.stTitle}>Sprites</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {sprites && (
          <>
            <FadeInImage
              uri={sprites.front_default}
              style={pokemonDetailTheme.stBasicSprites}
              isLoading={isLoading}
              finishLoading={finishLoading}
            />
            <FadeInImage
              uri={sprites.back_default}
              style={pokemonDetailTheme.stBasicSprites}
              isLoading={isLoading}
              finishLoading={finishLoading}
            />

            <FadeInImage
              uri={sprites.front_shiny}
              style={pokemonDetailTheme.stBasicSprites}
              isLoading={isLoading}
              finishLoading={finishLoading}
            />
            <FadeInImage
              uri={sprites.back_shiny}
              style={pokemonDetailTheme.stBasicSprites}
              isLoading={isLoading}
              finishLoading={finishLoading}
            />
          </>
        )}
      </ScrollView>

      {/* SPRITES */}
      <View style={pokemonDetailTheme.container}>
        <Text style={pokemonDetailTheme.stTitle}>Habilidades base</Text>
        <View style={pokemonDetailTheme.stContainerTypes}>
          {abilities &&
            abilities.map(({ability}) => (
              <Text style={pokemonDetailTheme.stRegularText} key={ability.name}>
                {ability.name}{' '}
              </Text>
            ))}
        </View>
      </View>
      {/* STATS */}
      <View style={pokemonDetailTheme.container}>
        <Text style={pokemonDetailTheme.stTitle}>Stats</Text>
        <View>
          {stats &&
            stats.map((stat, i) => (
              <View
                key={stat.stat.name + i}
                style={pokemonDetailTheme.stContainerStats}>
                <Text
                  style={[
                    pokemonDetailTheme.stRegularText,
                    pokemonDetailTheme.stStatName,
                  ]}>
                  {stat.stat.name}
                  {''}
                </Text>
                <Text
                  style={[
                    pokemonDetailTheme.stRegularText,
                    pokemonDetailTheme.stStatBase,
                  ]}>
                  {stat.base_stat}
                  {''}
                </Text>
              </View>
            ))}
        </View>
      </View>
      {/* MOVES */}
      <View style={pokemonDetailTheme.container}>
        <Text style={pokemonDetailTheme.stTitle}>Movimientos</Text>
        <View style={pokemonDetailTheme.stContainerMoves}>
          {moves &&
            moves.map(({move}) => (
              <Text
                style={[
                  pokemonDetailTheme.stRegularText,
                  pokemonDetailTheme.stMoveName,
                ]}
                key={move.name}>
                {move.name + ','}
                {''}
              </Text>
            ))}
        </View>
      </View>
      {/* SPRITE FINAL */}
      {sprites && (
        <View style={pokemonDetailTheme.stSpriteFinal}>
          <FadeInImage
            uri={sprites.front_default}
            style={pokemonDetailTheme.stBasicSprites}
            isLoading={isLoading}
            finishLoading={finishLoading}
          />
        </View>
      )}
    </ScrollView>
  );
};
