import * as React from 'react';
import PhonicSoundButton from './components/PhonicSoundButton'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'orange'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#000000', fontSize: 25 },
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',
          }}
        />
        <TextInput
          style={styles.text}
          placeholder="Enter the word"
          onChangeText={(t) => {
            this.setState({ text: t });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            var word = this.state.text.toLowerCase().trim()
            db[word]?(
            this.setState({ chunks: db[word].chunks }),
            this.setState({ phonicSounds: db[word].phones })
            ):(
              this.setState({chunks:[]}),
              alert("Word does not exist")
              )
          }}>
          <Text>FIND</Text>
        </TouchableOpacity>
        {this.state.chunks.map((i,index) => {
          return (
            <PhonicSoundButton wordChunk={this.state.chunks[index]} soundChunk={this.state.phonicSounds[index]} />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  text: {
    fontSize: 15,
    alignSelf: 'center',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 5,
    marginTop: 50,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'orange',
    fontSize: 40,
    margin: 10,
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    alignSelf: 'center',
    backgroundColor: 'red',
    fontSize: 30,
    borderRadius: 5,
    margin: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 35,
    alignSelf: 'center',
    color: 'black',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
});
