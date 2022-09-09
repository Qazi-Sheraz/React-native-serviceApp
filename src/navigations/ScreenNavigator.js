/* eslint-disable prettier/prettier */


import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUP } from '../screens/signUp';
import { Testing } from '../screens/testing';



const Stack = createNativeStackNavigator();

export const ScreenNavigator = () => {
 
 return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
           name="Testing" 
           component={Testing} 
           options={{headerShown: false}}
           />
      
        <Stack.Screen 
           name="SignUp" 
           component={SignUP} 
           options={{headerShown: false}}
           />

           

      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

