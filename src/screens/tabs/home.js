/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import registerScreens, {startApp, showOverlay, push} from '../../screens';


type Props = {};
export default class home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is home tab</Text>

        <TouchableOpacity onPress={() => push('items')}><Text style={styles.instructions}>Push items Page</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => push('itemDetail')}><Text style={styles.instructions}>Push itemDetail Page</Text></TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
