import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import SummaryScreen from './screens/SummaryScreen';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:"bisque"}}>
        <AppHeader />
        <Container />
      </View>
    );
  }
}

let navigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
});

const Container = createAppContainer(navigator);
