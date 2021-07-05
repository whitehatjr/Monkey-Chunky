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
                      ? [styles.chunkButton, { backgroundColor: 'white' }]
                      : [styles.chunkButton, { backgroundColor: 'red' }]
          }
        onPress={() => {
          this.setState({ pressButtonIndex: this.props.buttonIndex });
          this.playSound(this.props.soundChunk);
        }}>
        <Text style={
          this.props.buttonIndex === this.state.pressButtonIndex
                        ? [styles.displayText, { color: 'red' }]
                        : [styles.displayText, { color: 'white' }]
        }>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create(
{  
  chunkButton: {
    borderWidth: 1,
   
    width: 40,
    height: 35,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 20,
  },
  displayText: {
    color: 'white',
    fontWeight: 'Bold',
    fontFamily: 'algerian',
    color: '#654138',
  },
});