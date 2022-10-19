/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Plumber} from '../screens/multiScreens/Plumber';
import {CarServices} from '../screens/multiScreens/CarServices';
import {SignUp} from '../screens/signUp/SignUp';
import {Login} from '../screens/Login/Login';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import TermsConditions from '../screens/TermsConditions/TermsConditions';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import VerifyOtp from '../screens/VerifyOtp/VerifyOtp';
import CreatePassword from '../screens/CreatePassword/CreatePassword';
import Splash from '../screens/Splash';
import BookService from '../screens/bookService/BookService';
import Walkthrough from '../screens/Walkthrough';
import AirConditioner from '../screens/multiScreens/AirConditioner';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{headerShown: false}}
        />
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
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermsConditions"
          component={TermsConditions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyOtp"
          component={VerifyOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreatePassword"
          component={CreatePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
