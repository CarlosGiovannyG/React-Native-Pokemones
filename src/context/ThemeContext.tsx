import React, {createContext, useEffect, useReducer} from 'react';
import {useColorScheme} from 'react-native';

import {ThemeContextProps, PropsState} from '../interfaces/interfaceThemes';
import {DarkTheme} from '../themes/darkTheme';
import {LightTheme} from '../themes/lightTheme';
import {themeReducer} from './themeReducer';

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsState) => {
  const globalTheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    globalTheme === 'dark' ? DarkTheme : LightTheme,
  );

  useEffect(() => {
    globalTheme === 'dark' ? setDarkTheme() : setLightTheme();
  }, [globalTheme]);

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
  };

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };

  return (
    <ThemeContext.Provider value={{setLightTheme, setDarkTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
