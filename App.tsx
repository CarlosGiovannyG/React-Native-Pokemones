import React from 'react';
import {ThemeProvider} from './src/context/ThemeContext';
import {PropsState} from './src/interfaces/interfaceThemes';
import {Tabs} from './src/navigation/Tabs';

const AppState = ({children}: PropsState) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const App = () => {
  return (
    <AppState>
      <Tabs />
    </AppState>
  );
};
export default App;
