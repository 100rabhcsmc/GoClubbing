import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInSignUp from '../signIn/logInSignUp';
import SignUp from '../signIn/signUp';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LogIn"
        component={LogInSignUp}
        options={{headerShown: false}}
      />

      <Stack.Screen name="SignUp" component={SignUp} options={{title: null}} />
      <Stack.Screen
        name="MainApp"
        component={MainNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
