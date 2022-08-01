import React, { useState } from "react";
import { Button } from './CalcButton'
import { myColors } from "../assets/Colors";
import { View,Text } from "react-native";
import Display from "./CalcDisplay";

export default function MyKeyboard(){
    const [firstNumber,setFirstNumber] = useState("");
    const [secondNumber,setSecondNumber] = useState("");
    const [operation,setOperation] = useState("");
    // const [result,setResult] = useState<Number|null>(null);
    // const handleNumberPress = (buttonValue) =>{
    //     if(firstNumber.length < 10){
    //         setFirstNumber(firstNumber + buttonValue);
    //     }
    // }
    const handleOperationPress = (buttonValue) =>{
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    }
    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    }
    const getResult = () => {
        switch(operation){
            case '+':
                clear()
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;
            case '-':
                clear()
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case '*':
                clear()
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;
            case '/':
                clear()
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;

        }
    }
    return <>
                <Display/>
                <View style={styles.keyboard}>
                    <View style = {styles.buttonrow}>
                        <CalcButton title="C" onPress={onPress} isDark={true} ></CalcButton>
                        <CalcButton title="+/-" onPress={onPress} isDark={true} ></CalcButton>
                        <CalcButton title="%" onPress={onPress} isDark={true} ></CalcButton>
                        <CalcButton title="÷" onPress={onPress} isBlue={true} ></CalcButton>
                    </View>
                    <View style ={styles.buttonrow}>
                        <CalcButton title="7" onPress={onPress} ></CalcButton>
                        <CalcButton title="8" onPress={onPress} isBlue={false} ></CalcButton>
                        <CalcButton title="9" onPress={onPress} isBlue={false} ></CalcButton>
                        <CalcButton title="x" onPress={onPress} isBlue={true} ></CalcButton>
                    </View>
                    <View style = {styles.buttonrow}>
                        <CalcButton title="4" onPress={onPress} isBlue={false} ></CalcButton>
                        <CalcButton title="5" onPress={onPress} isBlue={false} ></CalcButton>
                        <CalcButton title="6" onPress={onPress} isBlue={false} ></CalcButton>
                        <CalcButton title="-" onPress={onPress} isBlue={true} ></CalcButton>
                    </View>
                    <View style = {styles.buttonrow}>
                        <CalcButton title="1" onPress={onPress} isBlue={false} ></CalcButton>
                        <CalcButton title="2" onPress={onPress} isBlue={false} ></CalcButton>
                        <CalcButton title="3" onPress={onPress} isBlue={false} ></CalcButton>
                        <CalcButton title="+" onPress={onPress} isBlue={true} ></CalcButton>
                    </View>
                    <View style = {styles.buttonrow}>
                        <CalcButton title="." onPress={onPress} isBlue={false} ></CalcButton>
                        <CalcButton title="0" onPress={onPress} isBlue={false} ></CalcButton>
                        <CalcButton title="<=" onPress={onPress} isBlue={false} ></CalcButton>
                        <CalcButton title="=" onPress={onPress} isBlue={true} ></CalcButton>
                    </View>
                </View>
            </>
}
