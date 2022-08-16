import {StyleSheet} from 'react-native';

export const cardTheme = StyleSheet.create({
  stContainer: {
    marginHorizontal: 8,
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 7,
  },
  stNamePok: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 8,
    left: 10,
  },
  stContainerPokeBola: {
    backgroundColor: 'transparent',
    width: 100,
    height: 100,
    position: 'absolute',
    top: 20,
    right: 0,
    overflow: 'hidden',
    opacity: 0.6,
  },
  stPokeBola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -22,
    right: -22,
  },
  stPokwmonImage: {
    width: 110,
    height: 110,
    position: 'absolute',
    right: -5,
    bottom: -7,
  },
});
