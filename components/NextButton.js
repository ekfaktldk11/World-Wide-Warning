import React from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';

const NextButton = props => {
    return(
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={props.onSelect}
            >
                <View style={styles.touchableTab}>
                    <Text>
                        {props.children}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 5,
        height: 25,
        width: 60,
        elevation: 3,
        borderWidth: 0.5,
        borderColor: 'gray',
        alignSelf: 'center'
    },
    touchableTab:{
        padding: 2,
        justifyContent: 'center'
    },
    text:{
        textAlign: 'center',
        fontSize: 20
    }
})

export default NextButton;