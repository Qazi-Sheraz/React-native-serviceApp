import React from 'react';
import {View, Text, Image} from 'react-native';
import {AppButton} from '../../components';
import {NavHeader} from '../../components/NavHeader';
import {colors, WP} from '../../shared/exporter';
import style from './styles';
const DetailScreen = ({navigation, route}) => {
  const {name, employee, phone, image, userType} = route.params;
  return (
    <View style={style.mainContainer}>
      <NavHeader
        leftIc={'arrow-back'}
        title={'Provider Info'}
        leftPressed={() => {
          navigation?.goBack();
        }}
      />
      <View style={style.contentContainer}>
        <View style={style.ImageMainStyle}>
          {/* Image */}
          <View style={style.ImageStyle}>
            <Image source={image} style={style.ImageView} />
          </View>
          {/* Text */}
          <View style={style.TextMainStyle}>
            <Text style={style.TextStyle}>{name}</Text>
            <Text style={style.TextColor}>{employee}</Text>
          </View>
        </View>
        {/* PhoneStyle */}
        <View style={style.PhoneMainStyle}>
          <View style={style.PhoneTextMainStyle}>
            <Text style={style.PhoneTextStyle}>Phone no:</Text>
            <Text style={style.NumberTextStyle}>{phone}</Text>
          </View>

          {/* EmailStyle */}
          <View style={style.EmailMainViewStyle}>
            <View style={style.EmailTextViewStyle}>
              <Text style={style.EmailTextStyle}>Provider Type:</Text>
              <Text style={style.EmailAddressTextStyle}>{userType}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginTop: WP('3'),
        }}>
        <AppButton
          title={'Contact Us'}
          bgColor={colors.b1}
          width={WP('85')}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default DetailScreen;
