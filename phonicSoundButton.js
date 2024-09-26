import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import {Header} from "react-native-elements";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Audio} from 'expo-av'

export default class PhonicSound extends React.Component{
constructor(props){
super(props);
this.state={pressedButtonIndex:''}
}

playSound=async(SoundChunk)=>{
var url='https://s3-whitehatjrcontent.whjr.online/phones/'+SoundChunk+'.mp3'
await Audio.Sound.createAsync({
uri: url
},{
shouldPlay:true
    
})
}
render(){
return(
<View>
<TouchableOpacity
    style=
    {this.state.pressedButtonIndex===this.props.buttonIndex?
    [styles.buttonstyle,{backgroundColor:"aqua"}]:
    [styles.buttonstyle,{backgroundColor:"yellow"}]}
      onPress={()=>{this.playSound(this.props.SoundChunk)
      this.setState({pressedButtonIndex:this.props.buttonIndex})}}
    ><Text>{this.props.WordChunk}</Text></TouchableOpacity>
</View>
)
}
}

const styles=StyleSheet.create(
{
buttonstyle:{
  borderWidth:2,
  width:125,
  height:25,
  borderColor:'black',
  borderRadius:200,
  marginTop:20,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'yellow'
  }
}
)