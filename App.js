import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Appbar, Avatar, TextInput } from 'react-native-paper';
import data from './localdb';
import {Audio} from 'expo-av';
import * as Speech from 'expo-speech';

// console.log(data['one'].phones[2])

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      chunks: [],
      phones: [],
    };
  }

  playSound=(x)=>{
    Audio.Sound.createAsync({uri:"https://s3-whitehatjrcontent.whjr.online/phones/"+x+".mp3"},{shouldPlay:true})
  }

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header style={{ backgroundColor: '#9F2C55' }}>
          <Appbar.Content
            title="Monkey Chunky App"
            subtitle="Helps students read better!"
          />
        </Appbar.Header>

        <Avatar.Image
          style={styles.image}
          size={150}
          source={{
            uri:
              'https://i.pinimg.com/originals/33/d1/ca/33d1ca54700482f2c4ef8483219f0bc8.gif',
          }}
        />

        <TextInput
          label={'word'}
          onChangeText={(x) => {
            this.setState({ word: x });
          }}
          placeHolder={'Enter a word!'}
          style={{ margin: 20 }}
          theme={{ colors: { primary: '#9F2C55', underlineColor: 'red' } }}
        />

        <Button
          onPress={() => {
            var word = this.state.word.toLowerCase().trim();
            Speech.speak(word);
            if(data[word]){
            this.setState({ chunks: data[word].chunks });
            this.setState({ phones: data[word].phones });
            }
            else{
              alert("The word you have entered was not found in our database, please try another one.")
            }
          }}
          title="Click for chunks"
          color="#9F2C55"
        />

        {this.state.chunks.map((x,i) => {
          return(
            <TouchableOpacity onPress={()=>{this.playSound(this.state.phones[i])}}>
          <Text style={styles.text}>
          {x}
          </Text>
           </TouchableOpacity>
          )
        })}



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
  },
  image: {
    alignSelf: 'center',
    margin: 25,
  },

  text:{
    alignSelf:'center',
    padding: 2,
    margin: 7,
    backgroundColor: 'white'
  }
});
