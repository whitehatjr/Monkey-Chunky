import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image } from 'react-native';
import {Header} from "react-native-elements";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import db from './localdb'
import {Audio} from 'expo-av'
import PhonicSound from './phonicSoundButton'
import MyHeader from './MyHeader'
import { Alert } from 'react-native';

export default class TypeScreen extends React.Component{

constructor(props){
super(props);
this.state={
  word:"",
  chunks:[],
  phones:[]
}

}

 render(){
  return (
    <SafeAreaProvider style={styles.container}>
<MyHeader/>

<TextInput 
style={{
  borderWidth:2,
  borderColor:'black',
  borderRadius:200,
  marginTop:20,
  textAlign:'center'
}}
placeholder="Type Your Word"
onChangeText={
  (Text)=>{
    this.setState({word:Text})
    }}/>

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
  backgroundColor:'yellow'
  }} 
  onPress={()=>{
    var word=this.state.word.toLowerCase().trim()
    db[word]?
    this.setState({
      chunks:db[word].chunks,
      phones:db[word].phones
      })
      :Alert.alert("This word does not exist in our database. We wil try to add it soon :)")}}><Text>GET CHUNKS</Text>
      </TouchableOpacity>

<View>
{this.state.chunks.map((item, index)=>{
 return( <View>
<PhonicSound WordChunk={this.state.chunks[index]} SoundChunk={this.state.phones[index]} buttonIndex={index}/>
  </View>
 )
})}

</View>
</SafeAreaProvider>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
