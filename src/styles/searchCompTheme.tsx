import {StyleSheet} from 'react-native';

export const searchCompTheme = StyleSheet.create({
  container: {
  },
  stContainerInput: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  stTextInput: {
    flex: 1,
    fontSize: 18,
    top: 2,
  },
});
