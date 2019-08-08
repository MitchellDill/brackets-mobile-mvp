import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Entrants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            entrants: [],
        };
        this.updateTextInput = this.updateTextInput.bind(this);
        this.handleEntrantSubmit = this.handleEntrantSubmit.bind(this);
    }

    updateTextInput(updatedText) {
        console.log(updatedText);
        this.setState({
          text: updatedText,
        });
      }

    handleEntrantSubmit(e) {
        let entrant = e.nativeEvent.text;
        let updatedEntrants = this.state.entrants.slice();
        updatedEntrants.push(entrant);
        console.log(entrant);
        this.setState({entrants: updatedEntrants});
        updatedEntrants.length === this.props.totalEntrants ? this.props.finalizeEntrants(updatedEntrants) : null;
    }

    render() {
        return (
            <View style={styles.fieldsContainer}>
                <Text style={[styles.text, styles.question]}>{this.props.question}</Text>
                {[...Array(this.props.totalEntrants).keys()].fill(true).map(entrant => {
                return  <TextInput
                          style={[styles.text, styles.field]}
                          editable={true}
                          onChangeText={(text)=>{this.updateTextInput(text);}}
                          onSubmitEditing={(e) => {this.handleEntrantSubmit(e);}}
                          >
                          ...
                        </TextInput>;
                })}
            </View>

        )
    }
}

Entrants.propTypes = {
    totalEntrants: PropTypes.number,
    finalizeEntrants: PropTypes.func,
    question: PropTypes.string,
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
    field: {
        flex: 2,
        backgroundColor: 'pink',
    },
    fieldsContainer: {
        flex: 1,
        justifyContent: 'space-around',
    },
    question: {
        flex: 2,
        fontSize: 24,
        fontWeight: '300',
        alignSelf: 'center',
    },
});
