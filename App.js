import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from './localdb';
import * as Speech from 'expo-speech';
import SoundButton from './components/soundbutton';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: '',
      chunks: [],
      phones: [],
    }
  }
  speak =(texts)=> {
    Speech.speak(texts);
  };

  componentDidUpdate(){
    
  }
  resetButton=()=>{
    this.setState({
      text: '',
      chunks: [],
      phones: [],
    })

  }
  
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>

         <Header
           backgroundColor = "blue"
            centerComponent={{text: 'Monkey Chunky', style:{color: '#fff', fontSize: 20}}}
          />
          <Image style = {styles.logoImage} source={{uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"}}/>
         <TextInput
         style = {styles.inputbox}
          onChangeText = {
            text=>{
              this.setState({
                text: text.trim().toLocaleLowerCase()
              })
            }
          }
          value={this.state.text}
          placeholder = "Enter a Word"
          
         />
        
        <TouchableOpacity style = {styles.buttonGo} onPress ={()=>{
          db[this.state.text] ? (
          this.setState({
            chunks: db[this.state.text].chunks,}),
            this.setState({
            phones: db[this.state.text].phones
          })
          ): alert("The word does not exist");
          console.log(db[this.state.text])
        }}>

          <Text style={styles.buttonText}>GO</Text>

        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index)=>{
            return(
                <SoundButton wordChunk={this.state.chunks[index]} word={this.state.phones[index]}/>
            );
          })}
          
        </View>
        <TouchableOpacity style={styles.resetbutton} onPress={()=>{
          this.resetButton()
        }}>
            <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
        </View>

      </SafeAreaProvider>
      
    );
  }

}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#Ffffd5',
  },
  inputbox: {
    marginTop: 25,
    width: 250,
    height: 50,
    alignSelf: "center",
    outline: 'none',
    borderWidth: 2,
    textAlign: "center"
  },
  buttonGo: {
    alignSelf: 'center',
    width: 100,
    height: 50,
    backgroundColor: "#1C99EF",
    alignItems: "center",
    marginTop: 50,
    borderRadius: 10
  },
  buttonText: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 7,
    fontWeight: 'bold',
  },
  logoImage: {
    width: 150, 
    height: 150,
    alignSelf: "center"
  },
  resetbutton: {
    alignSelf: 'center',
    width: 100,
    height: 50,
    backgroundColor: "#FC8185",
    alignItems: "center",
    marginTop: 80,
    borderRadius: 10
  }
});
