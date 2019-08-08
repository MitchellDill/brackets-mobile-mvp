import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const SetupQuestion = props => {
    return (
        <View style={styles.body}>
            <Text style={[styles.text, styles.question]}>{props.question}</Text>
            <TextInput
                style={[styles.text, styles.field]}
                editable={true}
                onChangeText={(text)=>{props.updateTextInput(text)}}
                onSubmitEditing={(e) => {props.handleTextSubmit(e, props.field)}}
                >
                ...
              </TextInput>
        </View>
    );
};

export default SetupQuestion;

SetupQuestion.propTypes = {
    question: PropTypes.string,
    totalEntrants: PropTypes.number,
    updateTextInput: PropTypes.func,
    handleTextSubmit: PropTypes.func,
    finalizeEntrants: PropTypes.func,
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
        fontSize: 24,
        fontWeight: '300',
        alignSelf: 'center',
    },
    field: {
        flex: 5,
        backgroundColor: 'pink',
    },
});