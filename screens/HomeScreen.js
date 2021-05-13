import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SearchComponent from '../components/SearchComponent';

const HomeScreen = props => {
    const [renderEnable, setRenderEnable] = useState(true);

    const renderEnableHandler = () => {
        setRenderEnable(true);
    }

    const renderDisableHandler = () => {
        setRenderEnable(false);
    }

    const navigateToInfoHandler = ( nationInfo ) => {
        console.log('pressed');
        props.navigation.navigate('Info', {
            flag: nationInfo.flag,
            nation: nationInfo.nation,
            iso: nationInfo.iso
        })
    }


    return (
        <View>
            {renderEnable && <Text>
                HomeScreen
            </Text>}
            <SearchComponent
                navigateToInfo={navigateToInfoHandler}
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

const styles = StyleSheet.create({

});

export default HomeScreen;

