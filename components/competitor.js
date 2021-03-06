import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Competitor = props => {
    return (
        <Fragment>
        {props.corner === 0 ?
            <View style={[styles.body, styles.firstCompetitor]}>
                <Text style={[styles.text, styles.competitor]}>{`[ ${props.entrant.name}`}</Text>
            </View>
        :
            <View style={[styles.body, styles.secondCompetitor]}>
                <Text style={[styles.text, styles.competitor]}>{`${props.entrant.name} ]`}</Text>
            </View>
        }
        </Fragment>
    );
};

export default Competitor;

Competitor.propTypes = {
    entrant: PropTypes.object,
    corner: PropTypes.number,
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 6,
        paddingRight: 6,
        borderBottomWidth: 2,
        borderBottomColor: 'pink',
      },
    text: {
        fontSize: 22,
        color:'white',
        textAlign: 'center',
    },
    competitor: {
        fontSize: 30,
        fontWeight: '400',
    },
    firstCompetitor: {
        alignSelf: 'flex-start',
        marginLeft: 5,
    },
    secondCompetitor: {
        alignSelf: 'flex-end',
        marginRight: 5,
    },
});
