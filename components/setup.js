import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Setup = props => {
    return (
        <View style={styles.body}>
            <Text style={styles.header}>Who in it to win it?</Text>
            <Text style={styles.field}>Enter competitors</Text>
        </View>
    );
};

export default Setup;

const styles = StyleSheet.create({
    body: {
      backgroundColor: 'yellow',
      flex: 1,
    },
    header: {
        flex: 1,
        textAlign: 'center',
    },
    field: {
        flex: 5,
    },
});
