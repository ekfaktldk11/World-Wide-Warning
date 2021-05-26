import React from 'react';
import { View, TouchableNativeFeedback, Text, Image, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const TouchableTab = props => {

    const { selectedNation } = props;

    return (
        <View style={styles.container}>
            <TouchableNativeFeedback style = {{flex:1}}
                onPress={props.onSelect}
            >
                <View style={styles.touchableTab}>
                    <Image style={styles.flag} source={selectedNation.flag} />
                    <Text style={styles.list}>{selectedNation.nation}</Text>
                    <Text style={styles.iso}>{selectedNation.iso}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: '95%',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        elevation: 3,
        alignSelf: 'center',
        backgroundColor: colors.primary
    },
    touchableTab: {
        paddingTop : 3,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent : 'center'
    },
    flag: {
        flex: 1,
        width: 60,
        height: 30,
        resizeMode: 'stretch'
    },
    list: {
        flex: 4,
        fontSize: 20,
        textAlign: 'center'
    },
    iso: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#a7afab'
    }
});

export default TouchableTab;