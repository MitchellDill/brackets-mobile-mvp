import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Competitor = props => {
    return (
        <View style={styles.body}><Text>BAD BOY</Text></View>
    );
};

export default Competitor;

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'purple',
        flex: 1,
      },
});
