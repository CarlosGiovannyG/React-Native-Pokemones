import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import PokemonScreen from '../screens/PokemonScreen';
import { SearchScreen } from '../screens/SearchScreen';
import {RootStackParams} from '../types/typeNavigation';

const Stack = createStackNavigator<RootStackParams>();

export const NavigationSearch = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={SearchScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};
