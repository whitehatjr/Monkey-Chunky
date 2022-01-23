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
                      ? [styles.chunkButton, { backgroundColor: 'grey' }]
                      : [styles.chunkButton, { backgroundColor: 'black' }]
          }
        onPress={() => {
          this.setState({ pressButtonIndex: this.props.buttonIndex });
          this.playSound(this.props.soundChunk);
        }}>
        <Text style={
          this.props.buttonIndex === this.state.pressButtonIndex
                        ? [styles.displayText, { color: 'white' }]
                        : [styles.displayText, { color: 'white' }]
        }>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  chunkButton: {
    width: 50,
    height: 40,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});