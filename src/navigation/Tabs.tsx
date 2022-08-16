import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import {Navigation} from './Navigation';
import {ThemeContext} from '../context/ThemeContext';

import { NavigationSearch } from './NavigationSearch';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  const {theme} = useContext(ThemeContext);
  const {
    ownColors: {colorIndicator},
  } = theme;
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        safeAreaInsets={{bottom: 7}}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colorIndicator,
          // tabBarBackground: ,
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'rgba(255,255,255,0.52)',
            borderWidth: 0,
            elevation: 0,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarLabel: 'Listado',
            tabBarIcon: ({color}) => (
              <Icon name="list-outline" color={color} size={30} />
            ),
          }}
          name="Home"
          component={Navigation}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Busqueda',
            tabBarIcon: ({color}) => (
              <Icon name="search-outline" color={color} size={30} />
            ),
          }}
          name="Search"
          component={NavigationSearch}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
