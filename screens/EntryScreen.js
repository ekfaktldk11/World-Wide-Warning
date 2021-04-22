import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const EntryScreen = props => {
    return(
        <View>
            <Text>
                EntryScreen
            </Text>
            <Button title='Back' onPress={() => props.screenConvert(0)} />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default EntryScreen;

