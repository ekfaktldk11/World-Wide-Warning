import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import NextButton from '../components/NextButton';
import TouchableInfoDetail from '../components/TouchableInfoDetail'

const SafeInfoScreen = props => {
    //const [reRenderList, setReRenderList] = useState(false);
    const {
        safetyResult,
        nation,
        pageNum } = props;

    console.log(pageNum);

    const checkTailRenderEnable = (n) => {
        if (n == 1) return false;
        else return true;
    }

    const checkHeadRenderEnable = (result) => {
        if (!result || result.length < 10) return false;
        else return true;
    }

    const renderLoadedData = (itemInfo) => {
        let itemData = itemInfo.item;

        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 1 }}>
                        {itemData.wrt_dt}
                    </Text>
                    <Text style={{ flex: 4 }}>
                        {itemData.title}
                    </Text>
                    <TouchableInfoDetail
                        onFocusDetail={() => props.showDetailHandler(itemData.txt_origin_cn)}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Text>
                {nation}의 안전 정보
            </Text>
            {!safetyResult && <Text>
                결과 없음
            </Text>}
            {safetyResult && <FlatList
                data={safetyResult}
                keyExtractor={(item) => item.sfty_notice_id}
                renderItem={renderLoadedData}
            />}
            <View style={{ flexDirection: 'row' }}>
                {checkTailRenderEnable(pageNum) && <NextButton
                    onSelect={props.setPageNumDown}
                >
                    이전
            </NextButton>}
                {checkHeadRenderEnable(safetyResult) && <NextButton
                    onSelect={props.setPageNumUp}
                >
                    다음
            </NextButton>}
            </View>
            <Button title='Back' onPress={() => props.screenConvert(0)} />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SafeInfoScreen;

