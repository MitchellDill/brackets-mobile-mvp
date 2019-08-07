import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Bracket = props => {
    return (
        <View><Text>{props.game}</Text></View>
    );
};

export default Bracket;

Bracket.propTypes = {
    game: PropTypes.string,
    entrants: PropTypes.arrayOf(PropTypes.object),
    totalEntrants: PropTypes.number,
};

const styles = StyleSheet.create({
    body: {
      backgroundColor: 'yellow',
    },
});
