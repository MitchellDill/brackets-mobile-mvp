import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Entrants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            entrants: [],
            currentEntrant: 1,
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
        let entrantRef = `entrant${this.state.currentEntrant}`;
        let nextEntrant = this.state.currentEntrant + 1;
        let nextEntrantRef = `entrant${nextEntrant}`;
        let updatedEntrants = this.state.entrants.slice();
        updatedEntrants.push(entrant);
        this.setState({
            currentEntrant: nextEntrant,
            entrants: updatedEntrants,
        });
        if (updatedEntrants.length === this.props.totalEntrants) {
            this.props.finalizeEntrants(updatedEntrants)
        } else {
            this.refs[entrantRef].clear();
            setTimeout(() => {
                this.refs[nextEntrantRef].focus();
            }, 200);
        }
    }

    render() {
        return (
            <View style={styles.fieldsContainer}>
                <Text style={[styles.text, styles.question]}>{this.props.question}</Text>
                {this.state.currentEntrant <= this.props.totalEntrants ?
                  <TextInput
                          ref={`entrant${this.state.currentEntrant}`}
                          style={[styles.text, styles.field]}
                          editable={true}
                          autoCorrect={false}
                          spellcheck={false}
                          maxLength={32}
                          clearTextOnFocus={true}
                          autoFocus={true}
                          enablesReturnKeyAutomatically={true}
                          placeholder={`entrant #${this.state.currentEntrant}`}
                          onChangeText={(text)=>{this.updateTextInput(text);}}
                          onSubmitEditing={(e) => {this.handleEntrantSubmit(e);}}
                        /> : null}
            </View>
        );
    }
}

Entrants.propTypes = {
    totalEntrants: PropTypes.number,
    finalizeEntrants: PropTypes.func,
    question: PropTypes.string,
};

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        color:'white',
        textAlign: 'center',
    },
    field: {
        flex: 1,
        backgroundColor: 'pink',
    },
    fieldsContainer: {
        flex: 10,
        justifyContent: 'space-around',
    },
    question: {
        flex: 1,
        fontSize: 24,
        fontWeight: '300',
        alignSelf: 'center',
    },
});
