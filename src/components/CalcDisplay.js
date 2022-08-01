import React, { useReducer, useRef } from "react";
import { StyleSheet,View,Text,TouchableOpacity } from "react-native";
export default function Display({result,equation}){
  return    <View style={styles.screen}>
                <Text style={styles.calc}> {equation} </Text>
                <Text style={styles.result}> {result} </Text>
            </View>
}
const styles= StyleSheet.create({
    screen:{
        backgroundColor: 'white',
        lineHeight:32,
        paddingTop:35,
        paddingBottom:20,
        marginHorizontal:5,
        marginTop: 10,
        borderRadius:20,
        marginBottom:20
    },calc:{
        color:'black',
        fontSize:25,
        fontWeight:'bold',
        paddingRight:5,
        textAlign:'right',
        justifyContent:'center',
        paddingTop:50
    },
    result:{
        color:'black',
        fontSize:25,
        fontWeight:'bold',
        paddingRight:5,
        textAlign:'right',
        justifyContent:'center',
    },
});