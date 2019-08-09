import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import SetupQuestion from './setupQuestion.js';
import Entrants from './entrants.js';

const Setup = props => {
    return (
        <View style={styles.body}>
            <Text style={[styles.text, styles.title]}>{'['}brackets{']'}</Text>
            {props.totalEntrants > 1 ? <Entrants question="enter all y'all's names in, if you please." totalEntrants={props.totalEntrants} finalizeEntrants={props.finalizeEntrants} />
            : props.game ? <SetupQuestion question="how many of y'all are gettin in on this?" field="totalEntrants" handleTextSubmit={props.handleTextSubmit} updateTextInput={props.updateTextInput} />
            : <SetupQuestion question="whatchu playin, partner?" field="game" handleTextSubmit={props.handleTextSubmit} updateTextInput={props.updateTextInput} />
            }
        </View>
    );
};

export default Setup;

Setup.propTypes = {
    game: PropTypes.string,
    entrants: PropTypes.arrayOf(PropTypes.object),
    totalEntrants: PropTypes.number,
    updateTextInput: PropTypes.func,
    handleTextSubmit: PropTypes.func,
    finalizeEntrants: PropTypes.func,
};

const styles = StyleSheet.create({
    body: {
      backgroundColor: 'black',
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
    },
    text: {
        fontSize: 28,
        color:'white',
        textAlign: 'center',
    },
    title: {
        flex: 3,
        fontSize: 42,
        fontWeight: '700',
        paddingTop: 5,
    },
});
