import React, { useState } from 'react';
import { View, Image, TouchableWithoutFeedback, StyleSheet, Button } from 'react-native';
import SearchComponent from '../components/SearchComponent';

const HomeScreen = props => {
    const [renderEnable, setRenderEnable] = useState(true);

    console.log(renderEnable);
    const renderEnableHandler = () => {
        setRenderEnable(true);
    }

    const renderDisableHandler = () => {
        setRenderEnable(false);
    }

    const navigateToInfoHandler = (nationInfo) => {
        console.log('pressed');
        props.navigation.navigate('Info', {
            flag: nationInfo.flag,
            nation: nationInfo.nation,
            iso: nationInfo.iso
        })
    }


    return (
        <TouchableWithoutFeedback onPress={renderEnableHandler}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                {renderEnable && <View style={{marginTop: 50}}>
                    <Image style={styles.imageSize} source={require('../data/backGround.png')} />
                </View>}
                <SearchComponent
                    navigateToInfo={navigateToInfoHandler}
                    setRenderEnable={renderEnableHandler}
                    setRenderDisable={renderDisableHandler}
                    renderHomeImage={renderEnable}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    imageSize: {
        width: 300,
        height: 300,
        resizeMode: 'stretch'
    }
});

export default HomeScreen;

