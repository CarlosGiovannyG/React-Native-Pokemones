import {StyleSheet} from 'react-native';

export const pokemonTheme = StyleSheet.create({
  stContainer: {
    flex: 1,
  },
  stContainerHeader: {
    height: 300,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  stBackButton: {
    position: 'absolute',
    left: 10,
  },
  stPokName: {
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  stPokeBola: {
    width: 250,
    height: 250,
    bottom: 22,
    opacity: 0.7,
  },
  stPokeImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  stLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
