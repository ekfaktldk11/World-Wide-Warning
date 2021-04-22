import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryListScreen = props => {
    return (
        <View>
            <Text>
                CategoryListScreen
                </Text>
            <Button
            title='1'
                onPress={() => props.screenConvert(1)}
            />
            <Button
            title='2'
                onPress={() => props.screenConvert(2)}
            />
            <Button
            title='3'
                onPress={() => props.screenConvert(3)}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default CategoryListScreen;

