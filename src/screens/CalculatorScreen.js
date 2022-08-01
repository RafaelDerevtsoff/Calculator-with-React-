import React,{useState} from "react";
import {View,Text,StyleSheet} from 'react-native';
import Display from "../components/CalcDisplay";
import CalcButton from "../components/CalcButton";

export default function Calculator(){
    const [firstNumber,setFirstNumber] = useState("");
    const [secondNumber,setSecondNumber] = useState("");
    const [operation,setOperation] = useState("");
    const [result,setResult] = useState(Number|null);
    let a = result;

    const handleNumberPress = (buttonValue) => () =>{
        // if(firstNumber.length < 10){
            setFirstNumber(firstNumber + buttonValue);
        // }
    }
    const handleOperationPress = (buttonValue)=>() =>{
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
    const getResult = (operation) => () => {
        switch(operation){
            case '+':
                clear()
                setResult(() =>{
                    parseFloat
                   return parseFloat(secondNumber) + parseFloat(firstNumber);
                });
                break;
            case '-':
                clear()
                setResult(parseFloat(secondNumber) - parseFloat(firstNumber));
                break;
            case '*':
                clear()
                setResult(parseFloat(secondNumber) * parseFloat(firstNumber));
                break;
            case '/':
                clear()
                setResult(parseFloat(secondNumber) / parseFloat(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;

        }
    }
    const onPress = () => {};

    return  <>
                <Display equation={ firstNumber + operation + secondNumber} result={result}/>
                <View style={styles.keyboard}>
                    <View style = {styles.buttonrow}>
                        <CalcButton title="C" onPress={clear} isDark={true} ></CalcButton>
                        <CalcButton title="+/-" onPress={onPress} isDark={true} ></CalcButton>
                        <CalcButton title="%" onPress={onPress} isDark={true} ></CalcButton>
                        <CalcButton title="÷" onPress={handleOperationPress("/")} isBlue={true} ></CalcButton>
                    </View>
                    <View style ={styles.buttonrow}>
                        <CalcButton title="7" onPress={handleNumberPress("7")} ></CalcButton>
                        <CalcButton title="8" onPress={handleNumberPress("8")} isBlue={false} ></CalcButton>
                        <CalcButton title="9" onPress={handleNumberPress("9")} isBlue={false} ></CalcButton>
                        <CalcButton title="x" onPress={handleOperationPress("*")} isBlue={true} ></CalcButton>
                    </View>
                    <View style = {styles.buttonrow}>
                        <CalcButton title="4" onPress={handleNumberPress("4")} isBlue={false} ></CalcButton>
                        <CalcButton title="5" onPress={handleNumberPress("5")} isBlue={false} ></CalcButton>
                        <CalcButton title="6" onPress={handleNumberPress("6")} isBlue={false} ></CalcButton>
                        <CalcButton title="-" onPress={handleOperationPress("-")} isBlue={true} ></CalcButton>
                    </View>
                    <View style = {styles.buttonrow}>
                        <CalcButton title="1" onPress={handleNumberPress("1")} isBlue={false} ></CalcButton>
                        <CalcButton title="2" onPress={handleNumberPress("2")} isBlue={false} ></CalcButton>
                        <CalcButton title="3" onPress={handleNumberPress("3")} isBlue={false} ></CalcButton>
                        <CalcButton title="+" onPress={handleOperationPress("+")} isBlue={true} ></CalcButton>
                    </View>
                    <View style = {styles.buttonrow}>
                        <CalcButton title="." onPress={handleNumberPress(".")} isBlue={false} ></CalcButton>
                        <CalcButton title="0" onPress={handleNumberPress("0")} isBlue={false} ></CalcButton>
                        <CalcButton title="<=" onPress={onPress} isBlue={false} ></CalcButton>
                        <CalcButton title="=" onPress={getResult(operation)} isBlue={true} ></CalcButton>
                    </View>
                </View>
            </>
}
const styles = StyleSheet.create({
    keyboard:{
        marginHorizontal:5,
    },
    buttonrow:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignContent:"center",
        paddingVertical:20
    }
})