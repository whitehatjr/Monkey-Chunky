import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image } from 'react-native';
import {Header} from "react-native-elements";
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class MyHeader extends React.Component{
render(){
return(
<SafeAreaProvider>
<Header
placement="right"
  leftComponent={{ text: 'MONKEY CHUNKY', style: { color: '#000',marginTop:10 } }}
  rightComponent={ <Image
    style={{width:30,height:30}}
    source={require('./logo.png')}/>}
 
  backgroundColor="yellow"
/>
</SafeAreaProvider>
)
}
}