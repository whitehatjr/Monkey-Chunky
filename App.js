import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image } from 'react-native';
import MyHeader from './MyHeader'
import TypeScreen from './TypeScreen'
import Home from './HomeScreen'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'

export default class App extends React.Component{
render(){
return(
<View>
<AppContainer/>
</View>
)
}
}
var AppNavigator= createSwitchNavigator({
    HomeScreen:Home,
    TypeScreen:TypeScreen,
    })
    const AppContainer=createAppContainer(AppNavigator)