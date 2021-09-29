import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import CustomButton from '../components/CustomButton';
import SafeInfoCard from '../components/SafeInfoCard';
import colors from '../constants/colors';

const SafeInfoScreen = props => {
    
    const {
        safetyResult,
        nation,
        pageNum } = props;

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
            <SafeInfoCard
                wrt_dt={itemData.wrt_dt}
                title={itemData.title}
                txt_origin_cn={itemData.txt_origin_cn}
                showDetailHandler={props.showDetailHandler}
            />
        )
    }

    return (
        <View style={styles.container}>
            {!safetyResult && <Text style={{
                textAlign: 'center',
                color: 'red',
                fontWeight: 'bold',
                fontSize: 24
            }}>
                {nation}의 안전 정보가 존재하지 않습니다.
            </Text>}
            {safetyResult && <FlatList
                data={safetyResult}
                keyExtractor={(item) => item.sfty_notice_id}
                renderItem={renderLoadedData}
            />}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row'}}>
                    {checkTailRenderEnable(pageNum) && <CustomButton
                        onSelect={props.setPageNumDown}
                    >
                        이 전
            </CustomButton>}
                    {checkHeadRenderEnable(safetyResult) && <CustomButton
                        onSelect={props.setPageNumUp}
                    >
                        다 음
            </CustomButton>}
                </View>
                <View>
                    <CustomButton onSelect={() => props.screenConvert(0)}
                    >
                        뒤로 가기
            </CustomButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SafeInfoScreen;

