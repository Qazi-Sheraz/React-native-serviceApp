import React from 'react';
import {View} from 'react-native';
import {NavHeader} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class AirConditioner extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
        }}>
        <NavHeader
          leftIc={'ios-arrow-back'}
          title={'AirConditioner'}
          rightIc={'ios-list'}
          leftPressed={() => {
            console.warn('leftPressed');
          }}
          rightPressed={() => {
            console.warn('rightPressed');
          }}
        />
      </View>
    );
  }
}
