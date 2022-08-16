import {StyleSheet} from 'react-native';

export const pokemonDetailTheme = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  stTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  stContainerTypes: {
    flexDirection: 'row',
  },
  stRegularText: {
    fontSize: 19,
    marginRight: 10,
  },
  stContainerStripes: {
    marginHorizontal: 20,
  },
  stBasicSprites: {
    width: 130,
    height: 130,
  },
  stContainerStats: {
    flexDirection: 'row',
  },
  stStatName: {
    width: 150,
  },
  stStatBase: {
    fontWeight: 'bold',
  },
  stContainerMoves: {
    marginHorizontal: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'auto',
  },
  stMoveName: {
    textAlign: 'justify',
  },
  stSpriteFinal: {
    marginBottom: 20,
    alignItems: 'center',
  },
});
