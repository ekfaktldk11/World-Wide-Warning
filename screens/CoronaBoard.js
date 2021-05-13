import React from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';

const CoronaBoard = props => {
    const contentWidth = useWindowDimensions().width;
    const { route } = props;

    const iso = route.params.iso;


    let base = `https://covid19.who.int/region/amro/country/${iso}`
    console.log(base);

    return (
        <ScrollView style={{ flex: 1}}>
            <RenderHTML contentWidth={contentWidth} source={{uri: base}}/>
        </ScrollView>
    )
}

export default CoronaBoard;