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
        updatedEntrants.length === this.props.totalEntrants - 1 ? this.props.finalizeEntrants(updatedEntrants) : null;
    }

    render() {
        return (
            <View style={styles.fieldsContainer}>
                {new Array(this.props.totalEntrants).fill(true).map(entrant => {
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
    fields: {
        flex: 1,
        justifyContent: 'space-around',
    },
});
