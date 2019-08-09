import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

export default class SetupQuestion extends Component {
    constructor(props) {
        super(props);
    }

    clearInput() {
        let inputRef = `${this.props.field}Input`;
        this.refs[inputRef].clear()
    }
    
    render() {
        return (
            <KeyboardAvoidingView style={styles.body} behavior="padding" enabled>
                <Text style={[styles.text, styles.question]}>{this.props.question}</Text>
                <TextInput
                    ref={`${this.props.field}Input`}
                    style={[styles.text, styles.field]}
                    editable={true}
                    autoCorrect={false}
                    spellcheck={false}
                    maxLength={32}
                    clearTextOnFocus={true}
                    autoFocus={true}
                    enablesReturnKeyAutomatically={true}
                    placeholder={this.props.field === "game" ? "typey typey" : "county county"}
                    keyboardType={this.props.field === "game" ? "default" : "numeric"}
                    onChangeText={(text)=>{this.props.updateTextInput(text)}}
                    onSubmitEditing={(e) => {
                        this.props.handleTextSubmit(e, this.props.field);
                        this.clearInput();
                    }}
                />
            </KeyboardAvoidingView>
        );
    }
};

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
      textAlign: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 28,
        color:'white',
        textAlign: 'center',
    },
    question: {
        flex: 5,
        fontSize: 24,
        fontWeight: '300',
        alignSelf: 'center',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 24,
        paddingBottom: 6,
        justifyContent: 'center',
        textAlign: 'center',
    },
    field: {
        flex: 7,
        backgroundColor: 'pink',
    },
});