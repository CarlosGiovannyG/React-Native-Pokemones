import {ThemeState} from '../interfaces/interfaceThemes';

export const LightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  divideColor: 'rgb(34,139,34)',
  colors: {
    background: 'rgb(211,211,211)',
    // background: 'white',
    primary: '#006fb9',
    text: '#000000',
    notification: 'rgb(218,165,32)',
    border: 'rgb(105,105,105)',
    card: 'rgb(250,240,230)',
  },
  ownColors: {
    buttonsPrimary: 'rgb(30,144,255)',
    buttonsSuccess: '	rgb(50,205,50)',
    buttonsDanger: '	rgb(255,0,0)',
    colorIndicator: 'rgb(255,140,0)',
    titlePokemon: 'rgb(192,192,192)',
  },
};
