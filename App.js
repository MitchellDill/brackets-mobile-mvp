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
    this.Competitor = this.Competitor.bind(this);
    this.buildCompetitors = this.buildCompetitors.bind(this);
  }

  updateTextInput(updatedText) {
    console.log(updatedText);
    this.setState({
      text: updatedText,
    });
  }

  Competitor(name, seed) {
    return {name, seed};
  }

  buildCompetitors(totalEntrants) {
    const competitors = [];
    const entrants = ['mitchell', 'morrisey', 'ron weasley', 'mollie'];
    for (let i = 0; i < totalEntrants; i++) {
      const competitor = this.Competitor(entrants[i], i);
      competitors.push(competitor);
    }
    return competitors;
  }

  buildBracket(totalEntrants) {
    const bracket = [];
    const rounds = Math.log2(totalEntrants);
  }

  componentDidMount() {
    const competitors = this.buildCompetitors(4);
    this.setState({
      game: 'Mario Kart 64',
      entrants: competitors,
      totalEntrants: 4,
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
