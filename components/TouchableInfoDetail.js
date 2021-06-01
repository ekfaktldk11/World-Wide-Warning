import React from 'react';
import {View, Text, Button, TouchableNativeFeedback, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';

const TouchableInfoDetail = props => {

    return(
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={props.onFocusDetail}
            >
                <Icon name="arrow-forward-outline" size={25} color={colors.accent} />
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:2,
        marginLeft: 3,
        alignItems: 'center'
    }
})

export default TouchableInfoDetail;