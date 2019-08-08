import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';
import Competitor from './competitor';

const Match = props => {
    return (
        <Fragment>
        {props.selected === false ?
            <View style={styles.body}>
                <Button title={props.entrants[0].name} color="pink" onPress={(matchId) => {
                    props.selectMatch(props.matchId)}}/>
                    <Text style={[styles.text, styles.vs]}>VS</Text>
                <Button title={props.entrants[1].name} color="pink" onPress={(matchId) => {
                    props.selectMatch(props.matchId)}}/>
            </View>
            : (
             <View style={styles.body}>
                <View style={styles.button}>
                <Button title="[ <-- ]" color="yellow" onPress={props.goBack} />
                </View>
                <View style={styles.matchScreen}>
                    <View style={styles.competitors}>
                            <Competitor entrant={props.entrants[0]} corner={0} />
                            <Text style={[styles.text, styles.bigVs]}>VS.</Text>
                            <Competitor entrant={props.entrants[1]} corner={1} />
                    </View>
                    <View style={styles.chatZone}>
                        <Text style={[styles.text, styles.chat]}>chat chat chat chat chattin that mess</Text>
                    </View>
                </View>
            </View>
            ) }
        </Fragment>
    );
};

export default Match;

Match.propTypes = {
    entrants: PropTypes.arrayOf(PropTypes.object),
    selected: PropTypes.bool,
    selectMatch: PropTypes.func,
    matchId: PropTypes.arrayOf(PropTypes.number),
    goBack: PropTypes.func,
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
      },
    matchScreen: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    competitors: {
        flex: 2,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        paddingBottom: 12,
    },
    chatZone: {
        flex: 7,
        backgroundColor: 'black',
    },
    button: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
    },
    text: {
        fontSize: 20,
        color:'white',
        textAlign: 'center',
    },
    chat: {
        textAlign: 'left',
        padding: 6,
    },
    vs: {
        fontSize: 18,
        fontWeight: '800',
    },
    bigVs: {
        fontSize: 26,
        fontWeight: '900',
    },
});
