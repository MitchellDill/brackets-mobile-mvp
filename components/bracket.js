import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Round from './round.js';

const Bracket = props => {
    return (
        <View style={styles.body}>
            <Text style={[styles.text, styles.title]}>{props.game}</Text>
            <View style={styles.bracket}>
                <ScrollView horizontal={true} contentContainerStyle={styles.scrollContainer}>
                    {props.bracket.map((matches, roundNo) => {
                        return <Round matches={matches} key={`round${roundNo}`} />;
                    })}
                </ScrollView>
            </View>
        </View>
    );
};

export default Bracket;

Bracket.propTypes = {
    game: PropTypes.string,
    totalEntrants: PropTypes.number,
    bracket: PropTypes.arrayOf(PropTypes.array),
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'purple',
        flex: 1,
      },
    bracket: {
        flex: 5,
        flexDirection: 'row',
        width: 750,
    },
    scrollContainer: {
        flex: 1,
    },
    text: {
          fontSize: 28,
          color:'white',
          textAlign: 'center',
      },
    title: {
          flex:1,
          fontSize: 38,
          fontWeight: '600',
          paddingTop: 5,
      },
});
