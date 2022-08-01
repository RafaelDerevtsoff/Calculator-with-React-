import React, { useContext } from "react";
import { StyleSheet,View,Text,TouchableOpacity, ImageBackground } from "react-native";
import { myColors } from "../assets/Colors";
import { ThemeContext } from "../context/ThemeContext";

export default function CalcButton({title,onPress,isBlue = false,isDark,isGray}){
    const theme = useContext(ThemeContext);
    const style =styles(isGray,isDark,isBlue,theme);
    const defaultProps ={
        onPress: onPress,
        title:title,
        isBlue:isBlue,
    }
    return  <>
                <TouchableOpacity 
                 style = {style.container}
                 onPress={defaultProps.onPress}>
                    <Text style={style.text}>{defaultProps.title}</Text>
                </TouchableOpacity>
            </>
}
const dark  = '#262A33'
const styles = (isGray,isDark,isBlue,theme) => StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:'bold',
        color: isDark|| isBlue ? 'white':theme === 'light'?`${dark}`:'white'
    },
    container:{
        alignItems:"center",
        justifyContent:"center",
        width:80,
        height:80,
        borderRadius:25,
        backgroundColor: isBlue ? myColors.blue:isGray? myColors.btnGray:isDark && theme!=='light'? `#647075`:isDark?'black':theme ==='light'?'white':`${dark}`
    }
})