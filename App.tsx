/**
 * A THING!
 * 
 */

import React, { Component } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './screens/Home';
import About from './screens/About';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={
          {tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
            )}
        } />
        <Tab.Screen name="About" component={About} options={
          {tabBarIcon: ({color, size}) => (
            <Icon name="info" size={size} color={color} />
          )}
        } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
