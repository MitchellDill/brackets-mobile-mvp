import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Round from './round.js';

const Bracket = props => {
    return (
        <View style={styles.body}>
            <Text style={[styles.text, styles.title]}>{props.game}</Text>
            <Round entrants={props.entrants} />
        </View>
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
        backgroundColor: 'purple',
        flex: 1,
      },
      text: {
          fontSize: 28,
          color:'white',
          textAlign: 'center',
      },
      title: {
          flex: 3,
          fontSize: 38,
          fontWeight: '600',
          paddingTop: 5,
      },
});
