import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {
   constructor(props){
      super(props);
      this.state = {
        pressedButtonIndex: '',
      }
      
    }
  playSound = async soundChunk => {
    console.log(soundChunk);
    var soundLink =
      'https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/' +
      soundChunk +
      '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={
          this.props.buttonIndex === this.state.pressButtonIndex
                      ?[styles.chunkBtn, {backgroundColor: 'white'}]: styles.chunkBtn

          }
        onPress={() => {
          this.setState({ pressButtonIndex: this.props.buttonIndex });
          this.playSound(this.props.soundChunk);
        }}>
        <Text style={
          this.props.buttonIndex === this.state.pressButtonIndex
                        ?[styles.displayText, {color: 'blue'}]: styles.displayText
        }>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    fontSize: 20,
    alignSelf: 'center',
  },
  chunkButton:{
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    marginTop: 20,
    backgroundColor: '#8963BA',
    borderRadius: 10,
  }
});