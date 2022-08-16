import {StyleSheet} from 'react-native';

export const searchTheme = StyleSheet.create({
  container: {
    // flex: 1,
  },
  stLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stInput: {
    position: 'absolute',
    zIndex: 999,
  },
  stTitle: {
    marginBottom: 10,
    fontSize: 35,
    fontWeight: 'bold',
  },
  stIndicator: {
    height: 100,
  },
});
