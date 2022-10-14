import React from 'react';
import {View,TouchableOpacity,Text,Image} from 'react-native';
import {NavHeader} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


export class Categories extends React.Component {
    render() {
      return (
      <View
        style={{
          // backgroundColor:'#000',
          flex:1,
        }}>
        <NavHeader
            leftIc={'ios-arrow-back'}
            title={'Categories '}
            rightIc={'ios-list'}
            leftPressed={() => {
              console.warn('leftPressed');
            }}
            rightPressed={() => {
              console.warn('rightPressed');
            }}
          />
          <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 2,
          }}>

        <View
        style={{
          // backgroundColor:'#faf',
          height:'30%',
        }}>
        

        </View>

       
        </KeyboardAwareScrollView>
        </View>
    );
   }
}