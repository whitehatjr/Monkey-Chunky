import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Audio } from 'expo-av';

export default class SoundButton extends React.Component{
constructor(){
  super();
  this.state={
    isButtonPressed: 'false'
  }
}
 playSound = async (word) => {
    await Audio.Sound.createAsync(
      { uri: 'https://s3-whitehatjrcontent.whjr.online/phones/'+word+'.mp3' },
      { shouldPlay: true }
    );
    this.setState({
      isButtonPressed: 'true'
    })
  }
  render(){
    return(
      <TouchableOpacity style={[styles.chunkButton, {backgroundColor: this.state.isButtonPressed==='true' ? '#FC8185':'#9EC2F3'}]} onPress ={()=>{
         this.playSound(this.props.word)
      }}>
       <Text style={styles.displaytexts}>{this.props.wordChunk}</Text>
      </TouchableOpacity>

          
    );
  }
}
const styles = StyleSheet.create({
  displaytexts: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 5
  },
  chunkButton: {
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "#9EC2F3",
    borderRadius: 5,
    width: 100,
    height: 50,
    margin: 25
  }
});