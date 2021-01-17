import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen';
import Dashboard from '../screens/dashboard'
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>   
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Dashboard} />
        </Stack.Navigator>
  </NavigationContainer>
  );
}