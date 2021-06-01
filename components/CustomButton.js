import React from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const CustomButton = props => {
    return(
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={props.onSelect}
            >
                <View style={styles.touchableTab}>
                    <Text style={styles.text}>
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
        height: 40,
        width: 70,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: colors.accent,
        justifyContent: 'center'
    },
    touchableTab:{
        flex: 1,
        justifyContent: 'center'
    },
    text:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    }
})

export default CustomButton;