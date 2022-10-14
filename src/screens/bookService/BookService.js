/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View,TouchableOpacity,Text,Image,TextInput} from 'react-native';
import { AppBtn, NavHeader} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { TouchImg } from '../../components/TouchImg';




export class BookService extends React.Component {
    render() {
      return (
      <View
        style={{
          // backgroundColor:'#000',
          flex:1,
        }}>
        <NavHeader
            leftIc={'ios-arrow-back'}
            title={'BookSevice'}
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
          backgroundColor:'#faf',
          height:'35%',
        }}>
        
        
        
        
        </View>
        <View
        style={{
          // backgroundColor:'#faa',
          height:'65%',
          
        }}>
        
        <View
        style={{
          // backgroundColor:'#fad',
          height:'30%',
          width:'100%',
          padding:4,
          justifyContent:'space-around',
          flexDirection:'row',
        }}>
         <TouchableOpacity
          onPress={this.onPress}
          style={{

                height: '85%',
                width: '20%',
                borderRadius: 15,
                borderColor: 'white',
                borderWidth: 0.5,
                alignItems: 'center',
                justifyContent: 'center',

              }}>
              <Image
          source={require('../../assets/Ac.jpeg')}
          style={{
            resizeMode: 'contain',
            height: '80%',
            width :'100%',
          }}
        />
              
          <Text
           style={{
              fontSize: 15,
            }}>Air Conditioner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onPress}
          style={{

                height: '80%',
                width: '20%',
                borderRadius: 15,
                borderColor: 'white',
                borderWidth: 0.5,
                alignItems: 'center',
                justifyContent: 'center',

              }}>
          <Text
          style={{
              fontSize: 15,
            }}>Car Service</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity
          onPress={this.onPress}
          style={{

                height: '80%',
                width: '20%',
                borderRadius: 15,
                bborderColor: 'white',
                borderWidth: 0.5,
                alignItems: 'center',
                justifyContent: 'center',

              }}>
              <Image
          source={require('../../assets/plumber.jpeg')}
          style={{
            resizeMode: 'contain',
            height: '80%',
            width :'100%',
          }}
        />
          <Text
          style={{
              fontSize: 15,
            }}>plumber</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onPress}
          style={{

                height: '80%',
                width: '20%',
                borderRadius: 15,
                borderColor: 'white',
                borderWidth: 0.5,
                alignItems: 'center',
                justifyContent: 'center',

              }}>
          <Text
          style={{
              fontSize: 15,
            }}>Electrician</Text>
        </TouchableOpacity>
        
        </View>
        
        <View
        style={{
          backgroundColor:'#faf',
          height:'35%',
          padding:4,
          justifyContent:'space-around',
          flexDirection:'row',
        }}>
        <TouchableOpacity
          onPress={this.onPress}
          style={{

                height: '80%',
                width: '20%',
                borderRadius: 15,
                borderColor: 'white',
                borderWidth: 0.5,
                alignItems: 'center',
                justifyContent: 'center',

              }}>
              
          <Text
          style={{
              fontSize: 15,
            }}>Carpenters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onPress}
          style={{

                height: '80%',
                width: '20%',
                borderRadius: 15,
                borderColor: 'white',
                borderWidth: 0.5,
                alignItems: 'center',
                justifyContent: 'center',

              }}>
          <Text
          style={{
              fontSize: 15,
            }}>Painter</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity
          onPress={this.onPress}
          style={{

                height: '80%',
                width: '20%',
                borderRadius: 15,
                borderColor: 'white',
                borderWidth: 0.5,
                alignItems: 'center',
                justifyContent: 'center',

              }}>
              <Image
          source={require('../../assets/plumber.jpeg')}
          style={{
            resizeMode: 'contain',
            height: '80%',
            width :'100%',
          }}
        />
          <Text
          style={{
              fontSize: 15,
            }}>Pest Control</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onPress}
          style={{

                height: '80%',
                width: '20%',
                borderRadius: 15,
                borderColor: 'white',
                borderWidth: 0.5,
                alignItems: 'center',
                justifyContent: 'center',

              }}>
          <Text
          style={{
              fontSize: 15,
            }}>Locksmith</Text>
        </TouchableOpacity>
        
        </View>
        
        </View>
        </KeyboardAwareScrollView>
        </View>
    );
   }
}
