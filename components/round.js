import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Match from './match.js';

const Round = props => {
    {console.log(props.entrants);}
    return (
        <View style={styles.body}><Match entrants={props.entrants} /></View>
    );
};

export default Round;

Round.propTypes = {
    entrants: PropTypes.arrayOf(PropTypes.object),
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'purple',
        flex: 1,
      },
});
