import React, {useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import styles from './styles';
import {image_option, colors} from '../../shared/exporter';
import {appLogo} from '../../shared/theme/assets';

const Walkthrough = ({navigation}) => {
  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = async () => {
    setTimeout(() => {
      navigation.navigate('Splash');
      // navigation.navigate('Auth', {screen: 'AddPersonalInfo'});
    }, 2500);
  };

  return (
    <>
      <ImageBackground
        style={styles.container}
        source={appLogo.BestieTextLogo}
        resizeMode="cover">
        <Text style={styles.title}>Mr.Care Service</Text>
      </ImageBackground>
    </>
  );
};
export default Walkthrough;
