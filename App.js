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
      bracket: [],
      text: '',
    };
    this.updateTextInput = this.updateTextInput.bind(this);
    this.Competitor = this.Competitor.bind(this);
    this.buildCompetitors = this.buildCompetitors.bind(this);
    this.buildBracket = this.buildBracket.bind(this);
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
    let rounds = Math.log2(totalEntrants);
    let entrants = this.state.entrants.slice();

    const seedBracket = competitors => {
      const round = [];
      const seedsArray = competitors.map(competitor => competitor.seed);
      console.log('the seeds array says: ', seedsArray);
      for (let i = 0; i < totalEntrants; i += 2) {
        const highSeed = Math.max(...seedsArray);
        const lowSeed = Math.min(...seedsArray);
        console.log('high seed is ', highSeed, ' and low seed is ', lowSeed);
        const match = competitors.filter(competitor => {
          return competitor.seed === highSeed || competitor.seed === lowSeed;
        });
        competitors = entrants.filter(competitor => {
          return competitor.seed !== highSeed || competitor.seed !== lowSeed;
        });
        console.log('the match should be: ', match);
        console.log(
          'and now the remaining entrants to seed are: ',
          competitors,
        );
        round.push(match);
      }
      bracket.push(round);
    };

    for (let i = 0; i < rounds; i++) {
      let round;
      if (i === 0) {
        round = seedBracket(entrants);
      } else {
        round = seedBracket(
          new Array(totalEntrants / Math.pow(2, i)).fill(
            this.Competitor('bobo', Math.floor(Math.random() * 128)),
          ),
        );
      }
      bracket.push(round);
    }
    console.log(bracket);
    return bracket;
  }

  componentDidMount() {
    const competitors = this.buildCompetitors(4);
    const bracket = this.buildBracket(4);
    this.setState({
      game: 'Mario Kart 64',
      entrants: competitors,
      totalEntrants: 4,
      bracket: bracket,
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
