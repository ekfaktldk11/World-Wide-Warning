import React from 'react';
import { View, TouchableNativeFeedback, Text, Image, StyleSheet } from 'react-native';

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
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 1,
        height: 40,
        width: '90%',
        elevation: 3
    },
    touchableTab: {
        flexDirection: 'row',
        alignItems : 'center'
    },
    flag: {
        flex: 1,
        width: 70,
        height: 40,
        resizeMode: 'stretch'
    },
    list: {
        flex: 4,
        fontSize: 20,
        textAlign: 'center'
    }
});

export default TouchableTab;