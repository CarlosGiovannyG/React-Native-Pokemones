import {ThemeState} from '../interfaces/interfaceThemes';

export const DarkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  divideColor: 'rgb(34,139,34)',
  colors: {
    background: 'rgb(0,0,0)',
    primary: 'rgb(0,0,139)',
    text: 'rgb(240,255,255)',
    notification: 'rgb(240,280,140)',
    border: 'rgb(128,0,0)',
    card: 'rgb(192,192,192)',
  },
  ownColors: {
    buttonsPrimary: 'rgb(50,205,50)',
    buttonsSuccess: '	rgb(0,100,0)',
    buttonsDanger: '	rgb(139,0,0)',
    colorIndicator: 'rgb(255,0,0)',
    titlePokemon: 'rgb(255,215,0)',
  },
};
