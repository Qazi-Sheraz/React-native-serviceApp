import React from 'react';
import {FlatList, Pressable, View, Text, Image} from 'react-native';
import {NavHeader} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors, Provider_List, size, WP} from '../../shared/exporter';
import {sin} from 'react-native-reanimated';

const AirConditioner = ({navigation, route}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <NavHeader
        leftIc={'ios-arrow-back'}
        title={route.params.name}
        leftPressed={() => {
          navigation.goBack();
        }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={Provider_List}
        renderItem={({item, index}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('DetailScreen', {
                image: item.icon,
                name: item.title,
                phone: item.Phone,
                userType: route.params.name,
              });
            }}
            style={{
              padding: WP('5'),
              // marginHorizontal: WP('5'),
              flexDirection: 'row',
            }}>
            <Image
              source={item.icon}
              resizeMode={'contain'}
              style={{
                height: WP('20'),
                width: WP('20'),
              }}
            />
            <View
              style={{
                padding: WP('5'),
              }}>
              <Text
                style={{
                  fontSize: size.text_16,
                  color: colors.b1,
                  fontWeight: 'bold',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: size.text_16,
                  color: colors.b1,
                }}>
                {item.Phone}
              </Text>
              <Text
                style={{
                  fontSize: size.text_16,
                  color: colors.b1,
                }}>
                {route.params.name}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default AirConditioner;
