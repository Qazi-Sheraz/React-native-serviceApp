/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */


import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { BookService } from '../screens/bookService/BookService';
import { SignUp } from '../screens/signUp/SignUp';
import { Categories } from '../screens/bookService';
import { AirConditioner } from '../screens/multiScreens/AirConditioner';
import { Plumber } from '../screens/multiScreens/Plumber';
import { CarServices } from '../screens/multiScreens/CarServices';





const Stack = createNativeStackNavigator();

export const ScreenNavigator = () => {
 
 return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
           name="BookService"
           component={BookService} 
           options={{headerShown: false}}
           />

      <Stack.Screen
           name="AirConditioner"
           component={AirConditioner} 
           options={{headerShown: false}}
           />

      <Stack.Screen     
           name="Plumber"
           component={Plumber} 
           options={{headerShown: false}}
           />
      <Stack.Screen
      
           name="CarServices"
           component={CarServices} 
           options={{headerShown: false}}
           />
           
      <Stack.Screen
      
           name="Categories"
           component={Categories} 
           options={{headerShown: false}}
           />

      
      
      <Stack.Screen
           name="SignUp"
           component={SignUp} 
           options={{headerShown: false}}
           />

      
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

