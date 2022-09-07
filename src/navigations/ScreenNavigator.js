/* eslint-disable prettier/prettier */


import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from '../screens/signUp';



const Stack = createNativeStackNavigator();

export const ScreenNavigator = () => {
 
 return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
           name="SignUp" 
           component={SignUp} 
           options={{headerShown: false}}

           />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

