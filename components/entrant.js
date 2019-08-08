import React, { Component, Fragment } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Entrant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    render() {
        return (
            <Fragment>
                <TextInput
                          style={[styles.text, styles.field]}
                          editable={true}
                          onChangeText={(text)=>{props.updateTextInput(text);}}
                          >
                          ...
                        </TextInput>;

            </Fragment>

        )
    }
}

Entrant.propTypes = {
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