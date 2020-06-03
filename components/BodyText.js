import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BodyText = props => {
    return (
        <Text style={styles.body}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans'
    }
});

export default BodyText;