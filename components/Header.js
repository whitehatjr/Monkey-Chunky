import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <SafeAreaView style={styles.head}>
//         <Text style={styles.title}>Monkey Chunky</Text>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   head: {
//     alignItems: "center",
//     backgroundColor: this.props.color,
//   },
//   title: {},
// });

function Header(props) {
  return (
    <SafeAreaView
      style={[
        styles.head,
        { backgroundColor: props.color, borderBottomColor: props.lineColor },
      ]}
    >
      <Text style={styles.title}>Monkey Chunky</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  head: {
    alignItems: "center",
    justifyContent: "center",
    height: "15%",
    borderBottomWidth: 1,
    width: "90%",
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Header;
