import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from './locaalDb';
import PhonicSoundButton from './components/phonic'



export default class App extends React.Component {
  constructor() {
    super();
    this.state = { text: '', displayText: '', chunks: [],  phones: [] };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor="orange"
            centerComponent={{
              text: 'Monkey-Chunky',
              style: { fontSize: 22, fontWeight: 'bold' },
            }}
          />

          <Image
            style={styles.monkey}
            source={require("./monkey.PNG")}
          />

          <TextInput
            placeholder="Enter Word"
            style={styles.input}
            onChangeText={(txt) => {
              this.setState({ text: txt });
              this.setState({chunks:[],phones:[]})
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.iput}
            onPress={() => {
              var word = this.state.text.toLowerCase().trim();

              db[word]? 
              (this.setState({ chunks: db[word].chunks }),
              this.setState({ phones: db[word].phones }))
              :
              Alert.alert("The word doesnt exist in the app")
            }}>
            <Text style={styles.f}> GO </Text>
          </TouchableOpacity>
          <View>
            {this.state.chunks.map((item,index) => {
              return (
                <PhonicSoundButton
                butonIndex = {index}
                chunks = {this.state.chunks[index]}
                phonic = {this.state.phones[index]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  input: {
    height: 40,
    marginTop: 50,
    borderWidth: 4,
    alignSelf: 'center',
    width: '80%',
  },
  iput: {
    alignSelf: 'center',
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 100,
    height: 50,
    borderRadius: 10,
  },
  f: {
    alignSelf: 'center',
    fontSize: 25,
  },
  monkey: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  ipt: {
    alignSelf: 'center',
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: '#a4cce8',
    width: 80,
    height: 40,
    borderRadius: 20,
  },
});
