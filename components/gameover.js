import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Gameover = props => {
    return (
        <Fragment>
            <View style={styles.body}>
                <View style={styles.winnerMessage}>
                    <Text style={styles.text}>ALL HAIL</Text>
                    <Text style={[styles.text, styles.winner]}>{props.winner.name}</Text>
                    <Text style={styles.text}>for they got up on that throne, folks</Text>
                </View>
                <View style={styles.statBlock}>
                    <Text style={[styles.text, styles.stats]}>WINS: {props.winner.wins}</Text>
                </View>
            </View>
        </Fragment>
    );
};

export default Gameover;

Gameover.propTypes = {
    winner: PropTypes.object,
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-around',
      },
    text: {
        fontSize: 22,
        color:'white',
        textAlign: 'center',
    },
    winner: {
        fontSize: 36,
        fontWeight: '700',
        color: 'pink',
    },
    winnerMessage: {
        justifyContent: 'center',
        paddingTop: 8,
    },
    statBlock: {
        justifyContent: 'center',
        paddingBottom: 20,
    },
    stats: {
        fontSize: 26,
    },
});
