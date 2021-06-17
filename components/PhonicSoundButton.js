import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idk: '' };
  }

  playSound = async (word) => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://s3-whitehatjrcontent.whjr.online/phones/' + word + '.mp3',
      },
      {
        shouldPlay: true,
      }
    );
  };

  

  render() {
    return (
      <TouchableOpacity
        style={
          this.props.butonIndex === this.state.idk?
          [styld.ipt,{backgroundColor: '#34f38d'}]
          :
          [styld.ipt,{backgroundColor: '#a4cce8'}]
        }
        onPress={() => {
          this.playSound(this.props.phonic);
          this.setState({ idk: this.props.butonIndex });
        }}>
        <Text style={styld.f}> {this.props.chunks} </Text>
      </TouchableOpacity>
    );
  }
}

const styld = StyleSheet.create({
  f: {
    alignSelf: 'center',
    fontSize: 25,
  },

  ipt: {
    alignSelf: 'center',
    marginTop: 30,
    justifyContent: 'center',
    width: 80,
    height: 40,
    borderRadius: 20,
  },
});
