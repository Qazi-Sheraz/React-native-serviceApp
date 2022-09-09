/* eslint-disable prettier/prettier */
import React from "react";
import {View,Text} from "react-native";

export class Testing extends React.Component {

    render() {
        return(
            
            <View
            style={{
                
                flex:1,
        }}>
           <View
            style={{
                backgroundColor:'#afa',
                height:'20%',
                width:'100%',
        }}>
           
            </View>
            <View
            style={{
                backgroundColor:'red',
                height:'80%',
                width:'100%',
        }}>
           
            </View>
            </View>
        );
    }
}