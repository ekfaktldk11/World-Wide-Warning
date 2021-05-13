import React from 'react';
import {View, Text, Button, TouchableNativeFeedback, StyleSheet} from 'react-native';

const TouchableInfoDetail = props => {

    return(
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={props.onFocusDetail}
            >
                <Text style={styles.text}>
                    자세히..
                </Text>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft: 3,
        borderLeftColor: 'gray',
        borderLeftWidth: 3
    },
    text:{
        fontSize : 12,
        textAlign: 'center'
    }
})

export default TouchableInfoDetail;