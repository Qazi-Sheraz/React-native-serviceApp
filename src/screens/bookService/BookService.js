import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {NavHeader} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors, Service_List, size, WP} from '../../shared/exporter';
import {appLogo} from '../../shared/theme/assets';

const BookService = ({navigation}) => {
  return (
    <View
      style={{
        // backgroundColor:'#000',
        flex: 1,
      }}>
      <NavHeader
        leftIc={'ios-arrow-back'}
        title={'BookSevice'}
        rightIc={'ios-list'}
        leftPressed={() => {
          navigation.goBack();
        }}
        rightPressed={() => {
          console.warn('rightPressed');
        }}
      />
      <KeyboardAwareScrollView>
        <View
          style={{
            padding: WP('10'),
            alignSelf: 'center',
          }}>
          <Image source={appLogo.BestieTextLogo} resizeMode={'contain'} />
        </View>

        <View
          style={{
            padding: WP('4'),
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderTopWidth: 0.1,
            borderRadius: 15,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Popular Categories
          </Text>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: colors.b1,
              width: '20%',
              padding: WP('2'),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: colors.white,
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          // horizontal={true}
          numColumns={4}
          data={Service_List}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AirConditioner', {
                  name: item.title,
                });
              }}
              activeOpacity={0.7}
              style={{
                width: WP('25'),
                padding: WP('5'),
                alignSelf: 'center',
              }}>
              <Image
                source={item.icon}
                style={{
                  height: 60,
                  width: 60,
                }}
              />
              <Text
                numberOfLines={1}
                style={{
                  fontSize: size.text_12,
                  color: colors.b1,
                  marginTop: WP('2'),
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default BookService;
