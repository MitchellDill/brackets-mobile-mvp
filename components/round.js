import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Match from './match.js';

const Round = props => {
    return (
        <View style={styles.body}>
            {props.matches.map((match, matchNo) => {
              return <Match
                        entrants={match}
                        selected={props.matchIsSelected}
                        selectMatch={props.selectMatch}
                        matchId={[props.roundId, matchNo]}
                        key={`match${matchNo}`}
                      />
            })}
        </View>
    );
};

export default Round;

Round.propTypes = {
    matches: PropTypes.arrayOf(PropTypes.array),
    matchIsSelected: PropTypes.bool,
    selectMatch: PropTypes.func,
    roundId: PropTypes.number,
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'purple',
        justifyContent: 'center',
        flex: 1,
      },
});
