import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    // source={{uri: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf-970-80.jpg'}}
                    source={require('../assets/success.png')}
                    resizeMode='cover' />
            </View>

            <BodyText>Number of rounds taken to guess the number <Text style={styles.highlight}>{props.userNumber}</Text> was <Text style={styles.highlight}>{props.roundsNumber}</Text></BodyText>
            <Button title="NEW GAME" onPress={props.onRestart}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: colors.primary
    }
});

export default GameOverScreen;