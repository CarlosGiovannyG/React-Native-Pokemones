import {ThemeState} from '../interfaces/interfaceThemes';
import {DarkTheme} from '../themes/darkTheme';
import {LightTheme} from '../themes/lightTheme';
import {themeAction} from '../types/typeActions';

export const themeReducer = (
  state: ThemeState,
  action: themeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...LightTheme};
    case 'set_dark_theme':
      return {...DarkTheme};
    default:
      return state;
  }
};
