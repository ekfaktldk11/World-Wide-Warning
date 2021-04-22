import React from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';

const SafeInfoScreen = props => {
    return(
        <View>
            <Text>
                SafeInfoScreen
            </Text>
            <Button title='Back' onPress={() => props.screenConvert(0)} />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SafeInfoScreen;

