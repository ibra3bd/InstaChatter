import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const NonUserStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default NonUserStack;
