/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View,TouchableOpacity,Text,Image,TextInput} from 'react-native';
import {NavHeader} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';





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
          // backgroundColor:'#faf',
          height:'30%',
        }}>
        

        </View>
        

        <View
        style={{
          // backgroundColor:'red',
          height:'70%',
          
        }}>

        <View
        style={{
          // backgroundColor:'#fa2',
          height:'10%',
          padding:12,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection:'row',
          borderTopWidth:0.1,
          borderRadius:15,
        }}>
        <Text
           style={{
              fontSize: 20,
              fontWeight: "bold"
           
            }}>Popular Categories</Text>
            <TouchableOpacity
          onPress={this.onPress}
          style={{
            backgroundColor:'#f5f6',

                height: '90%',
                width: '25%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,

              }}>
              
          <Text
          style={{
              fontSize: 15,
              fontWeight: "bold"
            }}>See all</Text>
        </TouchableOpacity>
        </View>
        
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
          onPress={() => {
                this.props.navigation.navigate('AirConditioner');
              }}
          style={{

                height: '85%',
                width: '20%',
                
                alignItems: 'center',
                justifyContent: 'center',

              }}>
              <Image
          source={require('../../assets/Ac.png')}
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
                
                alignItems: 'center',
                justifyContent: 'center',

              }}>
               <Image
          source={require('../../assets/car.png')}
          style={{
            resizeMode: 'contain',
            height: '80%',
            width :'100%',
          }}
        />
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
                
                alignItems: 'center',
                justifyContent: 'center',

              }}>
              <Image
          source={require('../../assets/plumber1.png')}
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
                
                alignItems: 'center',
                justifyContent: 'center',

              }}>
              <Image
          source={require('../../assets/electric.png')}
          style={{
            resizeMode: 'contain',
            height: '80%',
            width :'100%',
          }}
        />

          <Text
          style={{
              fontSize: 15,
            }}>Electrician</Text>
        </TouchableOpacity>
        
        </View>
        
        <View
        style={{
          // backgroundColor:'#faf',
          height:'30%',
          padding:4,
          justifyContent:'space-around',
          flexDirection:'row',
        }}>
        <TouchableOpacity
          onPress={this.onPress}
          style={{

                height: '80%',
                width: '20%',
               
                alignItems: 'center',
                justifyContent: 'center',

              }}>
              <Image
          source={require('../../assets/carPntr.png')}
          style={{
            resizeMode: 'contain',
            height: '80%',
            width :'100%',
          }}
        />
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
                
                alignItems: 'center',
                justifyContent: 'center',

              }}>
              <Image
          source={require('../../assets/paint.png')}
          style={{
            resizeMode: 'contain',
            height: '80%',
            width :'100%',
          }}
        />
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
                
                alignItems: 'center',
                justifyContent: 'center',

              }}>
              <Image
          source={require('../../assets/pest-control.jpg')}
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
                
                alignItems: 'center',
                justifyContent: 'center',

              }}>
              <Image
          source={require('../../assets/lock.png')}
          style={{
            resizeMode: 'contain',
            height: '80%',
            width :'100%',
          }}
        />
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
