import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Entrant from './entrant.js';

const SetupQuestion = props => {
    return (
        <View style={styles.body}>
            <Text style={[styles.text, styles.question]}>{props.question}</Text>
            {props.totalEntrants ? new Array(props.totalEntrants).fill(true).map(entrant => {
                return <Entrant />
                })
            : <TextInput
                style={[styles.text, styles.field]}
                editable={true}
                onChangeText={(text)=>{props.updateTextInput(text);}}
                onSubmitEditing={(e) => {props.handleTextSubmit(e, props.field)}}
                >
                ...
              </TextInput>}
        </View>
    );
};

export default SetupQuestion;

SetupQuestion.propTypes = {
    question: PropTypes.string,
    totalEntrants: PropTypes.number,
    updateTextInput: PropTypes.func,
    handleTextSubmit: PropTypes.func,
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