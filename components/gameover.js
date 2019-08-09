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
                    <Text style={[styles.text, styles.stats, styles.victories]}>{`personally saw to the ${props.game}-related misfortune of`}
                    {props.winner.victoriesOver.map((foe, i, foes) => {
                       return (
                           i < foes.length - 1 ? 
                           <Text style={[styles.text, styles.stats, styles.victories]} key={`defeated${i}`}>{` ${foe} and`}</Text>
                           :
                           <Text style={[styles.text, styles.stats, styles.victories]} key={`defeated${i}`}>{` ${foe}`}</Text>
                           );
                    })}
                    </Text>
                </View>
            </View>
        </Fragment>
    );
};

export default Gameover;

Gameover.propTypes = {
    game: PropTypes.string,
    winner: PropTypes.object,
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        paddingBottom: 12,
        paddingTop: 12,
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
        flex: 2,
        justifyContent: 'center',
        paddingTop: 8,
    },
    statBlock: {
        flex: 3,
        justifyContent: 'center',
        paddingBottom: 20,
    },
    stats: {
        fontSize: 26,
        color: 'gold',
    },
    victories: {
        paddingTop: 12,
        fontSize: 22,
        justifyContent: 'center',
    },
});
