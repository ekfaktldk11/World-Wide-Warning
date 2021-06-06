import React from 'react';
import { ScrollView,  Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

const ShowDetailScreen = props => {
    const contentWidth = Dimensions.get("window").width * 0.9;
    const { route } = props;

    const detailInfo = route.params.detailInfo;

    return (
        <ScrollView style={{ flex: 1}}>
            <HTML ignoredStyles={['line-height']}
            contentWidth={contentWidth} source={{html : detailInfo}}/>
        </ScrollView>
    )
}

export default ShowDetailScreen;