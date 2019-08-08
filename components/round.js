import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Match from './match.js';

const Round = props => {
    return (
        <View style={styles.body}>
            {props.matches.map((match, matchNo) => {
                return <Match entrants={match} key={`match${matchNo}`} />;
            })}
        </View>
    );
};

export default Round;

Round.propTypes = {
    matches: PropTypes.arrayOf(PropTypes.array),
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'purple',
        flex: 1,
      },
});
