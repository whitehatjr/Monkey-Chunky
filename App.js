import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

import db from "./localdb";

import Header from "./components/Header";
import PhonicSoundButton from "./components/PhonicSoundButton";

var goPressed = false;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      chunks: [],
      phonicSounds: [],
    };
  }

  componentDidMount() {
    setInterval(() => {
      goPressed = false;
    }, 1);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header color="white" lineColor="grey" />
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              "https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png",
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var word = this.state.text.toLowerCase().trim();
            db[word]
              ? (this.setState({ chunks: db[word].chunks }),
                this.setState({ phonicSounds: db[word].phones }))
              : Alert.alert("This word does not exist in our database");
            goPressed = true;
          }}
        >
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => {
            if (goPressed) {
              return (
                <PhonicSoundButton
                  wordChunk={this.state.chunks[index]}
                  soundChunk={this.state.phonicSounds[index]}
                  buttonIndex={index}
                  goPressed={goPressed}
                />
              );
            } else {
              return null;
            }
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputBox: {
    marginTop: 50,
    width: "75%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    backgroundColor: "#e5e5e5",
    fontSize: 18,
    borderRadius: 15,
  },
  goButton: {
    width: "50%",
    height: 55,
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  imageIcon: {
    marginTop: "20%",
    width: 170,
    height: 170,
    alignSelf: "center",
  },
});
