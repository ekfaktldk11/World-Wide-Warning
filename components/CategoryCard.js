import React from 'react';
import { View, TouchableNativeFeedback, Image, Text, StyleSheet } from 'react-native';

const CategoryCard = props => {
    return (
        <View style={styles.cardContainer}>
            <TouchableNativeFeedback
                onPress={props.onSelect}
            >
                <View style={styles.touchableTab}>
                    <Image style={styles.imageContainer} source={props.image} />
                    <Text style={styles.fontStyle}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: '27%',
        width: '90%',
        margin: 5,
        elevation: 3,
        flexDirection: 'column',
        alignSelf: 'center',
        borderColor: '#f6cfd0',
        borderWidth: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    touchableTab: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start'
    },
    fontStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    imageContainer: {
        width: 80,
        height: 80,
        resizeMode: 'stretch',
        marginLeft: 20,
        marginRight: 50
    }
})

export default CategoryCard