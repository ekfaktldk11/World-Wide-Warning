import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const BookMarkScreen = props => {
    return(
        <View>
            <Text>
                BookMarkScreen
            </Text>
            <Button
            title='go to Info'
            onPress={() => 
            props.navigation.navigate('Info')}
            />
        </View>
    )
}

BookMarkScreen.navigationOptions = navData => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({

});

export default BookMarkScreen;

