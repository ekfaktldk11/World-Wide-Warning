import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const HeaderTitle = props => {
    return <View style={styles.container}>
        {props.imgEnable && <Image style={styles.image}
            source={props.imgSource} />}
        <Text style={styles.title}>{props.title}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        marginLeft: 20,
        marginRight: 10,
        width: 50,
        height: 30,
        resizeMode: 'stretch'
    },
    title: {
        flex: 1,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center' //with 'flex'!
    }

})

export default HeaderTitle;