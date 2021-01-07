import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableNativeFeedback
} from 'react-native';
import styles from '../styles/Styles';

class Home extends Component {
  state = {
    testText: "Initialized Value",
    count: 0
  }

  updateState = (text: string) => this.setState({testText: text})
  updateStateCount = () => this.setState({testText: "Button Pressed", count: this.state.count+1})
  resetCount = () => this.setState({count: 0})

  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.pageTitle}>Epic Button Demo</Text>
        <Text>{this.state.testText} {this.state.count}</Text>
        <View style={styles.ctrlBtns}>        
          <View style={styles.ctrlBtn}><Button title="A Big Button!" onPress={this.updateStateCount} /></View>
          <View style={styles.ctrlBtn}><Button title="Reset Count" onPress={this.resetCount} /></View>
        </View>
        <TouchableNativeFeedback onPress={() => this.updateState("Custom Button Pressed")}><Text style={styles.customButton}>Custom Button Test</Text></TouchableNativeFeedback>
      </View>
    );
  }
}

export default Home;