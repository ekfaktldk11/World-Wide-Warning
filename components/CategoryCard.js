import React from 'react';
import { View, TouchableNativeFeedback, Text, StyleSheet } from 'react-native';

const CategoryCard = props => {
    return (
        <View style={styles.cardContainer}>
            <TouchableNativeFeedback
                onPress={props.onSelect}
            >
                <View style={styles.touchableTab}>
                    <Text style={styles.fontStyle}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: '25%',
        width: '90%',
        margin: 5,
        elevation: 3,
        flexDirection: 'column',
        alignSelf: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    touchableTab: {
        flex: 1,
        justifyContent: 'center'
    },
    fontStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default CategoryCard