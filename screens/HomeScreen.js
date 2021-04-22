import React,{useState} from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
import SearchComponent from '../components/SearchComponent';

const HomeScreen = props => {
    const [renderEnable, setRenderEnable] = useState(true);
    
    const renderEnableHandler = () => {
        setRenderEnable(true);
    }

    const renderDisableHandler = () => {
        setRenderEnable(false);
    }

    return(
        <View>
            {renderEnable && <Text>
                HomeScreen
            </Text>}
            <SearchComponent 
                setRenderEnable={renderEnableHandler}
                setRenderDisable={renderDisableHandler}
            />
            {renderEnable && <Button
            title='go to Globe'
            onPress={() => 
            props.navigation.navigate('Globe')}
            />}
        </View>
    )
}

HomeScreen.navigationOptions = navData => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({

});

export default HomeScreen;

