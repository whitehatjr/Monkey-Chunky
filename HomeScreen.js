import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image } from 'react-native';
import TypeScreen from './TypeScreen';
import MyHeader from './MyHeader'

export default class Home extends React.Component{
render(){
return(
<View style={{alignItems:'center'}}>
<MyHeader/>
<Text style={{fontSize:30,fontWeight:'bold',marginTop:30
,color:'black',alignSelf:'center',fontSize:20}} >
HI, LET'S START</Text>
<TouchableOpacity 
style={{
  borderWidth:2,
  width:125,
  height:25,
  borderColor:'black',
  borderRadius:200,
  marginTop:20,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'yellow',
  alignSelf:'center'
  }} 
  onPress={()=>{this.props.navigation.navigate("TypeScreen")}}
><Text>LET'S BEGIN !</Text>
      </TouchableOpacity>
</View>
)
}
}