import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CovidScreen from './CovidScreen';
import EntryScreen from './EntryScreen';
import SafeInfoScreen from './SafeInfoScreen';
import CategoryListScreen from './CategoryListScreen';

const CategoryScreen = props => {
    const [screenNum, setScreenNum] = useState(0);

    const screenConvertHandler = num => {
        setScreenNum(num)
    }

    let content;

    switch (screenNum) {
        // case 0:
        //     content = <CategoryListScreen screenConvert={screenConvertHandler} />
        //     break
        case 1:
            content = <CovidScreen screenConvert={screenConvertHandler} />
            break
        case 2:
            content = <EntryScreen screenConvert={screenConvertHandler} />
            break
        case 3:
            content = <SafeInfoScreen screenConvert={screenConvertHandler} />
            break
        default:
            content = <CategoryListScreen screenConvert={screenConvertHandler} />
            break
    }

    return (
        <View>
            {content}
        </View>
    )
}

CategoryScreen.navigationOptions = navData => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({

});

export default CategoryScreen;

