import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppHeader, AppInput, AuthFooter} from '../../components';
import {
  appIcons,
  colors,
  loginFormFields,
  LoginVS,
  WP,
} from '../../shared/exporter';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';
const Login = ({navigation}) => {
  const onPressSignIn = async values => {
    try {
      const isUserLogin = await auth().signInWithEmailAndPassword(
        values.email,
        values.password,
      );
      console.log('isUserCreated', isUserLogin);
      alert('User Login Successfuly');
      navigation.replace('BookService');
    } catch (error) {
      alert('ERROR', error);
      console.log('error', error);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <AppHeader
          title={'Hi, Welcome Back! '}
          backIcon={true}
          onPressBack={() => {
            navigation.goBack();
          }}
        />
        <Formik
          initialValues={loginFormFields}
          onSubmit={values => {
            onPressSignIn(values);
          }}
          validationSchema={LoginVS}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
            handleReset,
          }) => (
            <View>
              <AppInput
                title={'Email Address'}
                placeholder={'Enter your email address'}
                placeholderTextColor={colors.g3}
                keyboardType={'email-address'}
                onChangeText={handleChange('email')}
                value={values.email}
                touched={touched.email}
                errorMessage={errors.email}
                autoCapitalize="none"
              />
              <AppInput
                title={'Password'}
                placeholder={'Enter your password'}
                onChangeText={handleChange('password')}
                placeholderTextColor={colors.g3}
                value={values.password}
                touched={touched.password}
                errorMessage={errors.password}
                renderErrorMessage={errors.password}
                // textEntry={true}
                secureTextEntry={true}
              />

              <View style={styles.forgotTextContainer}>
                <Text
                  style={styles.forgotText}
                  onPress={() => {
                    navigation.navigate('ForgotPassword');
                  }}>
                  Forgot your password?
                </Text>
              </View>
              <AppButton
                width={WP('90')}
                bgColor={colors.b1}
                title={'Sign In'}
                height={WP('14')}
                onPress={() => {
                  handleSubmit();
                }}
              />
            </View>
          )}
        </Formik>
        <View style={styles.contentContainer}>
          <View style={styles.Spacer} />
          <Text style={styles.OrTextStyle}>or</Text>
          <View style={styles.Spacer} />
        </View>
        <View style={styles.IconContainer}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <Image source={appIcons.googleIcon} style={styles.googleStyle} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <Image source={appIcons.fbIcon} style={styles.fbIconStyle} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <Image source={appIcons.appleIcon} style={styles.appleStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.BottomTextStyle}>
          By signing in to you account, you agree to{'\n'} our
          <Text
            style={styles.termStyle}
            onPress={() => {
              navigation.replace('PrivacyPolicy');
            }}>
            {' '}
            Privacy & Policy
          </Text>
          <Text> and </Text>
          <Text
            style={styles.termStyle}
            onPress={() => {
              navigation.navigate('TermsConditions');
            }}>
            Terms & Conditions.
          </Text>
        </Text>
        <AuthFooter
          title={'Dont have an account?'}
          subtitle={' Sign Up'}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
        {/* <AppLoader loading={loading} /> */}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export {Login};
