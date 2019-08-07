/**
 * @format
 * @flow
 */

import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Setup from './components/setup.js';
import Bracket from './components/bracket.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: '',
      entrants: [{}],
      totalEntrants: 0,
      text: '',
    };
    this.updateTextInput = this.updateTextInput.bind(this);
  }

  updateTextInput(updatedText) {
    console.log(updatedText);
    this.setState({
      text: updatedText,
    });
  }

  recordSetup(field) {}

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safe}>
          {this.state.game &&
          this.state.totalEntrants &&
          this.state.entrants.length > 1 ? (
            <Bracket
              game={this.state.game}
              entrants={this.state.entrants}
              totalEntrants={this.state.totalEntrants}
            />
          ) : (
            <Setup
              game={this.state.game}
              entrants={this.state.entrants}
              totalEntrants={this.state.totalEntrants}
              updateTextInput={this.updateTextInput}
            />
          )}
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});
