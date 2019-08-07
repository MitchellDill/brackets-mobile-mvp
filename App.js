/**
 * @format
 * @flow
 */

import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Bracket from './components/bracket.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exists: true
    }
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
      <Bracket />
        </SafeAreaView>
      </Fragment>
    );

  }
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'yellow',
  },
});
