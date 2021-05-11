import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
import PhonicSoundButton from './components/PhonicSoundButton';

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
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey 🐵 Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://th.bing.com/th/id/OIP.oaxzge_eIk7_aANfqVHqrQAAAA?w=128&h=180&c=7&o=5&dpr=1.5&pid=1.7',
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var word = this.state.text.toLowerCase().trim();
            db[word]?(
            this.setState({ chunks: db[word].chunks }),
            this.setState({ phonicSounds: db[word].phones })
            ):
            Alert.alert("The word does not exist in our database");
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => {
            return (
              <PhonicSoundButton
                wordChunk={this.state.chunks[index]}
                soundChunk={this.state.phonicSounds[index]}
                buttonIndex={index}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    borderRadius:20,
  },
  goButton: {
    width: 70,
    height: 50,
    borderRadius:50,
    marginTop:20,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor:'#72b42a'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  }
});
