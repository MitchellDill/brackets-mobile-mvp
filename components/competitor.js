import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Competitor = props => {
    return (
        <View style={styles.body}>
            <Text style={[styles.text, styles.competitor]}>{props.entrant.name}</Text>
        </View>
    );
};

export default Competitor;

Competitor.propTypes = {
    entrant: PropTypes.object,
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'purple',
        flex: 1,
      },
    text: {
        fontSize: 22,
        color:'white',
        textAlign: 'center',
    },
    title: {
        flex: 2,
        fontSize: 34,
        fontWeight: '400',
        paddingTop: 5,
        paddingBottom: 5,
    },
});
