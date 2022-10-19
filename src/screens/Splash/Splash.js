import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {AppButton} from '../../components';
import {colors, family, size, WP} from '../../shared/exporter';
import {appImages, appLogo} from '../../shared/theme/assets';
import styles from './styles';

const Splash = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={appLogo.BestieTextLogo}
      resizeMode="cover">
      {/* <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      /> */}
      <View style={styles.logoContainer}>
        {/* <Image
          source={appLogo.BestieTextLogo}
          resizeMode="contain"
          style={styles.logoStyle}
        /> */}
        <Text style={styles.textStyle}>Mr.Care Service</Text>
      </View>
      <AppButton
        bgColor={colors.b1}
        width={WP('90')}
        title={'Get Started'}
        style={styles.btnContainer}
        onPress={() => {
          navigation.replace('Login');
        }}
      />
      <View style={styles.accountContainer}>
        <Text style={styles.accountStyles}>
          Don't have an account?{' '}
          <Text
            style={styles.signUpStyle}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            Sign Up
          </Text>
        </Text>
      </View>
      {/* <View style={styles.footerContainer}>
        <Text style={styles.BottomTextStyle}>
          By signing in to you account, you agree to our {'\n'}
          <Text
            style={styles.termStyle}
            onPress={() => {
              navigation.replace('Auth', {screen: 'Login'});
            }}>
            Privacy & Policy
          </Text>
          <Text> and </Text>
          <Text
            style={styles.termStyle}
            onPress={() => {
              navigation.replace('Auth', {screen: 'Login'});
            }}>
            Terms & Conditions.
          </Text>
        </Text>
      </View> */}
    </ImageBackground>
  );
};

export default Splash;
