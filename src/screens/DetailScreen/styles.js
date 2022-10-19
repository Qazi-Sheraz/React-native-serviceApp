import {Dimensions, StyleSheet, StatusBar} from 'react-native';
import {size, WP} from '../../shared/exporter';
const {height, width} = Dimensions.get('window');
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    height: (height / 100) * 80,
  },
  ImageMainStyle: {
    height: (height / 100) * 13,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  ImageStyle: {
    height: (height / 100) * 15,
    //   backgroundColor: '#fda',
    width: (width / 100) * 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageView: {
    height: 70,
    width: 70,
    marginLeft: 35,
  },
  TextMainStyle: {
    height: (height / 100) * 15,
    width: (width / 100) * 50,
    // backgroundColor: '#dfd',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: size.text_22,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 25,
  },
  TextColor: {
    color: 'gray',
  },
  PhoneMainStyle: {
    height: (height / 100) * 10,
    marginVertical: WP('8'),
    // backgroundColor: 'green',
  },
  PhoneTextMainStyle: {
    height: (height / 100) * 10,
    //   backgroundColor: '#adf',
  },
  PhoneTextStyle: {
    fontSize: size.text_24,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 45,
  },
  NumberTextStyle: {
    fontSize: size.text_22,
    color: 'black',
    marginLeft: 45,
    marginTop: 2,
  },
  EmailMainViewStyle: {
    height: (height / 100) * 10,
    // backgroundColor: 'green',
  },
  EmailTextViewStyle: {
    height: (height / 100) * 10,
    //   backgroundColor: '#adf',
  },
  EmailTextStyle: {
    fontSize: size.text_24,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 45,
  },
  EmailAddressTextStyle: {
    fontSize: size.text_22,
    color: 'black',
    marginLeft: 45,
    marginTop: 2,
  },
  FooterMainStyle: {
    height: (height / 100) * 30,
    // backgroundColor: 'red',
  },
  FooterTextStyle: {
    fontSize: size.text_10,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 18,
  },
  FooterBtnMainStyle: {
    height: (height / 100) * 25,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default style;
