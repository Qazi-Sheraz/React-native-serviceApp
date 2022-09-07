/* eslint-disable prettier/prettier */
import React from "react";
import {View,Text} from "react-native";

export class SignUp extends React.Component {

    render() {
        return(
            
            <View
            style={{
                backgroundColor:'#afa',
                flex:1,
        }}>
            <Text
            style={{
              fontSize: 29,
              color: '#fff',
              fontWeight: 'bold',
              fontStyle: 'italic',
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}
            // numberOfLines={1}
          >
            hello Sherrii {'\n'} This is MY Laptop Hp 1030 ELITEBOOK G2
          </Text>
           
            </View>
        );
    }
}