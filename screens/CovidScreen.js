import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CovidScreen = props => {
    return (
        <View>
            <Text>
                CovidScreen
            </Text>
            <Button title='Back' onPress={() => props.screenConvert(0)} />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default CovidScreen;

