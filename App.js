import React from "react";
import { useState } from "react";
import CalculatorScreen from "./src/screens/CalculatorScreen";
import { Calculator } from 'react-native-calculator'
import { View,SafeAreaView ,StyleSheet,Switch} from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import {myColors} from './src/assets/Colors'
import MyKeyboard from "./src/components/MyKeyboard";


export default function app(){
  
  const [theme,setTheme] = useState('light');
  const style = stylesFunc(theme)
  return  <>
            <ThemeContext.Provider value={theme}>
              <SafeAreaView style={style.screen}>
                <View style={{flexDirection:'row',justifyContent:"center" ,alignContent:'center'}}>
                <Switch
                  value={theme === 'light'}
                  onValueChange={() => setTheme(theme === 'light'?'dark':'light')}/>
                </View>
                    <CalculatorScreen style={{flex:1}}/>
              </SafeAreaView>
            </ThemeContext.Provider>
          </>
}
const stylesFunc = (theme) => StyleSheet.create({
      screen:{
        backgroundColor: theme === 'light'? myColors.light : myColors.dark,
        flex:1,
      
      }
})