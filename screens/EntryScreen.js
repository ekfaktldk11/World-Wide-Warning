import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const EntryScreen = props => {
    const { nation, entryResult } = props;

    const doNeedPspt = (pspt) => {
        if (pspt == 'Y') return true;
        else return false;
    }

    const remarkExist = (remark) => {
        if(remark) return true;
        else return false;
    }

    const renderLoadedData = (itemInfo) => {
        let itemData = itemInfo.item
        return(
        <View style={{flex:1}}>
            <Text>
                국가명 : {itemData.country_nm}
            </Text>
            {doNeedPspt(itemData.gnrl_pspt_visa_yn) && <Text>
                일반여권 허가 기간 : {itemData.gnrl_pspt_visa_cn}
            </Text>}
            {doNeedPspt(itemData.ofclpspt_visa_yn) && <Text>
                관용여권 허가 기간 : {itemData.ofclpspt_visa_cn}
            </Text>}
            {doNeedPspt(itemData.dplmt_pspt_yn) && <Text>
                외교관여권 허가 기간 : {itemData.country_nm}
            </Text>}
            {remarkExist(itemData.remark) && <Text>
                비고 : {itemData.remark}
            </Text>}
        </View>)
    }

    return (
        <View style={{ flex: 1 }}>
            <Text>
                {nation}의 입국 허가 요건
            </Text>
            {!entryResult && <Text>
                {nation}의 입국 허가 요건에 대한 정보가 없습니다.
            </Text>}
            {entryResult &&
                <FlatList
                    data={entryResult}
                    keyExtractor={(item) => item.country_nm}
                    renderItem={renderLoadedData}
                />}
            <Button title='Back' onPress={() => props.screenConvert(0)} />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default EntryScreen;

