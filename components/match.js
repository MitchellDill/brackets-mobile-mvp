import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import PropTypes from 'prop-types';
import Competitor from './competitor';

const Match = props => {
    return (
        <Fragment>
        {props.selected === false ?
            <View style={styles.body}>
                <Button title={`[${props.entrants[0].name}]`} color="pink" onPress={(matchId) => {
                    props.selectMatch(props.matchId)}}/>
                    <Text style={[styles.text, styles.vs]}>VS</Text>
                <Button title={`[${props.entrants[1].name}]`} color="pink" onPress={(matchId) => {
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
                            {props.entrants[0].victoriesOver.length > 0 ?
                            <Text style={[styles.text, styles.compOne, styles.victoryTitle]}>
                                {`${props.entrants[0].name}, who vanquished the heinous ${props.entrants[0].victoriesOver[0]}`}
                            </Text> : null}
                            <Text style={[styles.text, styles.bigVs]}>
                                VS.
                            </Text>
                            <Competitor entrant={props.entrants[1]} corner={1} />
                            {props.entrants[1].victoriesOver.length > 0 ?
                            <Text style={[styles.text, styles.compTwo, styles.victoryTitle]}>
                                {`${props.entrants[1].name}, who conquered the cruel ${props.entrants[1].victoriesOver[0]}`}
                            </Text> : null}
                    </View>
                    <View style={styles.whoWon}>
                        <Modal visible={props.modalVisible} transparent={false} animationType="fade" presentationStyle="formSheet">
                            <View style={styles.modal}>
                                <View style={styles.button}>
                                    <Button title="[ <-- ]" color="yellow" onPress={props.goBack} />
                                </View>
                                <View style={styles.modalCompetitors}>
                                <Button title={props.entrants[0].name} color="pink" onPress={() => {
                                    props.advanceWinner(props.entrants[0], props.matchId, props.entrants[1].name)}}/>
                                <Text style={[styles.text, styles.vs]}>
                                    VS
                                </Text>
                                <Button title={props.entrants[1].name} color="pink" onPress={() => {
                                    props.advanceWinner(props.entrants[1], props.matchId, props.entrants[0].name)}}/>
                                </View>
                            </View>
                        </Modal>
                        <Button title="who won??????" color="pink" onPress={(visible) => {props.askWinner(true)}} />
                    </View>
                    <View style={styles.statBlock}>
                        <Text style={[styles.text, styles.stats]}>
                            most turtles: 7
                        </Text>
                    </View>
                    <View style={styles.chatZone}>
                        <Text style={[styles.text, styles.chat]}>
                            chat chat chat chat chattin that mess
                        </Text>
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
    askWinner: PropTypes.func,
    advanceWinner: PropTypes.func,
    modalVisible: PropTypes.bool,
    goBack: PropTypes.func,
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      },
    matchScreen: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    competitors: {
        flex: 3,
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
    whoWon: {
        flex: 1,
        alignSelf: 'stretch',
        paddingTop: 3,
        paddingBottom: 3,
    },
    modal: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalCompetitors: {
        flex: 8,
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        paddingBottom: 12,
        fontSize: 28,
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
        fontSize: 22,
        fontWeight: '900',
        alignSelf: 'center',
    },
    victoryTitle: {
        fontSize: 12,
        fontWeight: '200',
    },
    compOne: {
        alignSelf: "flex-start",
    },
    compTwo: {
        alignSelf: 'flex-end',
    },
    statBlock: {
        justifyContent: 'center',
        paddingBottom: 20,
    },
    stats: {
        fontSize: 24,
    },
});
