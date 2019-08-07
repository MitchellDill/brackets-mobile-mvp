import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Setup = props => {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>{'['}brackets{']'}</Text>
            <Text style={styles.question}>Who in it to win it?</Text>
            <TextInput style={styles.field} editable={true} onChangeText={(text)=>{props.updateTextInput(text);}}>What game you playin?</TextInput>
        </View>
    );
};

export default Setup;

Setup.propTypes = {
    game: PropTypes.string,
    entrants: PropTypes.arrayOf(PropTypes.object),
    totalEntrants: PropTypes.number,
    updateTextInput: PropTypes.func,
};

const styles = StyleSheet.create({
    body: {
      backgroundColor: 'purple',
      flex: 1,
    },
    title: {
        flex: 3,
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: 5,
        color:'white',
    },
    question: {
        flex: 2,
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
    field: {
        flex: 5,
        fontSize: 28,
        color: 'white',
        textAlign: 'center',
    },
});
