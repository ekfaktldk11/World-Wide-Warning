import React from 'react';
import { View, Text, StyleSheet, Linking, Button } from 'react-native';



const CovidScreen = props => {
    const { iso } = props;

    let base = `https://covid19.who.int/region/amro/country/${iso}`

    return (
        <View>
            <Text>
                CovidScreen
            </Text>
            <Button title='코로나 대시보드 살펴보기' onPress={props.showCoronaDshBrd}/>
            <Button title='코로나 대시보드 페이지로 이동' 
            onPress ={() => Linking.openURL(base)} />
            <Button title='Back' onPress={() => props.screenConvert(0)} />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default CovidScreen;

