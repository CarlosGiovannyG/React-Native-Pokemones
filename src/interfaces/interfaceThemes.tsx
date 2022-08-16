import {Theme} from '@react-navigation/native';
import {ownColors} from '../types/colorTypes';

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  divideColor: string;
  ownColors: ownColors;
}

export interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export interface PropsState {
  children: JSX.Element | JSX.Element[];
}
