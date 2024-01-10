import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import CartScreen from '../Screens/CartScreen';
import {NavigationContainer} from '@react-navigation/native';
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Detail'} component={DetailScreen} />
        <Stack.Screen name={'Cart'} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
