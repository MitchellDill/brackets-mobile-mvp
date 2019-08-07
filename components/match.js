import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Competitor from './competitor';

const Match = props => {
    return (
        <View style={styles.body}><Competitor /> vs. <Competitor /></View>
    );
};

export default Match;

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'purple',
        flex: 1,
      },
});
