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
                    <Text style={[styles.text, styles.vs]}>VS.</Text>
                <Button title={props.entrants[1].name} color="pink" onPress={(matchId) => {
                    props.selectMatch(props.matchId)}}/>
            </View>
            : (
             <View style={styles.body}>
                <Competitor entrant={props.entrants[0]}/>
                    <Text style={[styles.text, styles.vs]}>VS.</Text>
                <Competitor entrant={props.entrants[1]}/>
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
