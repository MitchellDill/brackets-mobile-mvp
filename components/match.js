import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Competitor from './competitor';

const Match = props => {
    return (
        <View style={styles.body}>
            <Competitor entrant={props.entrants[0]}/>
                <Text style={[styles.text, styles.vs]}>VS.</Text>
            <Competitor entrant={props.entrants[1]}/>
        </View>
    );
};

export default Match;

Match.propTypes = {
    entrants: PropTypes.arrayOf(PropTypes.object),
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'purple',
        flex: 1,
        alignItems: 'center',
      },
    text: {
        fontSize: 28,
        color:'white',
        textAlign: 'center',
    },
    vs: {
        fontSize: 18,
        fontWeight: '900',
    },
});
