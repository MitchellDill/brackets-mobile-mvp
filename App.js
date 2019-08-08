/**
 * @format
 * @flow
 */

import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Modal,
  StatusBar,
} from 'react-native';

import Setup from './components/setup.js';
import Bracket from './components/bracket.js';
import Match from './components/match.js';
import { throwStatement } from '@babel/types';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: '',
      entrants: [{}],
      totalEntrants: 0,
      bracket: [],
      matchIsSelected: false,
      roundSelected: 0,
      matchSelected: 0,
      tournamentWinner: false,
      modalVisible: false,
      text: '',
    };
    this.updateTextInput = this.updateTextInput.bind(this);
    this.Competitor = this.Competitor.bind(this);
    this.buildCompetitors = this.buildCompetitors.bind(this);
    this.buildBracket = this.buildBracket.bind(this);
    this.selectMatch = this.selectMatch.bind(this);
    this.goBack = this.goBack.bind(this);
    this.askWinner = this.askWinner.bind(this);
    this.advanceWinner = this.advanceWinner.bind(this);
  }

  updateTextInput(updatedText) {
    console.log(updatedText);
    this.setState({
      text: updatedText,
    });
  }

  selectMatch(matchNo) {
    let [round, match] = matchNo;
    this.setState({
      matchIsSelected: true,
      roundSelected: round,
      matchSelected: match,
    });
    console.log('round ', round, 'match ', match);
  }

  goBack() {
    this.setState({
      matchIsSelected: false,
      modalVisible: false,
    });
  }

  askWinner(visible) {
    this.setState({
      modalVisible: visible,
    });
  }

  advanceWinner(winner) {
    this.goBack();
    console.log('winner winner chicken dinner for ', winner.name);
  }

  Competitor(name, seed) {
    return {name, seed};
  }

  buildCompetitors(totalEntrants) {
    const competitors = [];
    const entrants = [
      'mitchell',
      'morrisey',
      'ron weasley',
      'mollie',
      'john boy',
      'billy',
      'fartknocker',
      'king kong',
    ];
    for (let i = 0; i < totalEntrants; i++) {
      const competitor = this.Competitor(entrants[i], i);
      competitors.push(competitor);
    }
    return competitors;
  }

  buildBracket(totalEntrants, allCompetitors) {
    const bracket = [];
    let rounds = Math.log2(totalEntrants);
    let entrants = allCompetitors.slice();

    const seedBracket = competitors => {
      const round = [];
      const seedsArray = competitors.map(competitor => competitor.seed);
      for (let i = 0; i < competitors.length; i += 2) {
        const highSeed = Math.max(...seedsArray);
        const lowSeed = Math.min(...seedsArray);
        const match = competitors.filter(competitor => {
          return competitor.seed === highSeed || competitor.seed === lowSeed;
        });
        seedsArray.pop();
        seedsArray.shift();
        console.log('the match should be: ', match);
        round.push(match);
      }
      bracket.push(round);
    };

    for (let i = 0; i < rounds; i++) {
      if (i === 0) {
        seedBracket(entrants);
      } else {
        let placeholderArray = new Array(totalEntrants / Math.pow(2, i)).fill(
          null,
        );
        placeholderArray = placeholderArray.map(placeholder => {
          return this.Competitor('TBD', Math.random() * 64);
        });
        seedBracket(placeholderArray);
      }
    }
    return bracket;
  }

  componentDidMount() {
    const competitors = this.buildCompetitors(8);
    const bracket = this.buildBracket(8, competitors);
    this.setState({
      game: 'Mario Kart 64',
      entrants: competitors,
      totalEntrants: 8,
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
          this.state.entrants.length > 1 &&
          this.state.matchIsSelected === false ? (
            <Bracket
              game={this.state.game}
              totalEntrants={this.state.totalEntrants}
              bracket={this.state.bracket}
              matchIsSelected={this.state.matchIsSelected}
              selectMatch={this.selectMatch}
            />
          ) : this.state.matchIsSelected === true ? (
            <Match
              selected={this.state.matchIsSelected}
              roundAndMatchSelected={this.props.roundAndMatchSelected}
              entrants={this.state.bracket[this.state.roundSelected][this.state.matchSelected]}
              askWinner={this.askWinner}
              advanceWinner={this.advanceWinner}
              modalVisible={this.state.modalVisible}
              goBack={this.goBack}
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
