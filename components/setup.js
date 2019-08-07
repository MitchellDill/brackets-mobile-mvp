import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Setup = props => {
    return (
        <View style={styles.body}>
            <Text style={[styles.text, styles.title]}>{'['}brackets{']'}</Text>
            <Text style={[styles.text, styles.question]}>Whatchu playin?</Text>
            <TextInput style={[styles.text, styles.field]} editable={true} onChangeText={(text)=>{props.updateTextInput(text);}}>...</TextInput>
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
    question: {
        flex: 2,
        fontSize: 30,
        fontWeight: '400',
    },
    field: {
        flex: 5,
        backgroundColor: 'pink',
    },
});
