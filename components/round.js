import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Match from './match.js';

const Round = props => {
    return (
        <View style={styles.body}><Match /></View>
    );
};

export default Round;

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'purple',
        flex: 1,
      },
});
