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

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 35,
    color: 'blue'
  },
  chunkButton:{
    width: '50%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    margin: 6,
    backgroundColor: 'green'
  }
});