import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList, Button } from 'react-native';
import CustomButton from '../components/CustomButton';
import EntryCard from '../components/EntryCard';
import SafeInfoCard from '../components/SafeInfoCard';
// import YouTubeList from '../components/YoutubeList';
// import { fetchYoutubeData } from '../temp/fetchData';

const EntryScreen = props => {
    const { nation, entryResult, entryPolicy } = props;

    const [videoItems, setVideoItems] = useState([]);

    let policyList = entryPolicy.filter(function (item) {
        return item.countryName == nation
    })

    // useEffect(() => {
    //     console.log("useEffect called");
    //     fetchYoutubeData(`${nation} 입국 제한`)
    //         .then((result) => result.json())
    //         .then((json) => setVideoItems(json.items))
    //         .catch((err) => console.log(err))
    // }, [])
    // console.log('videoItems');
    // console.log(videoItems);

    const doNeedPspt = (pspt) => {
        if (pspt == 'Y') return true;
        else return false;
    }

    const remarkExist = (remark) => {
        if (remark) return true;
        else return false;
    }

    const renderPolicyItem = (data) => {
        let itemData = data.item;
        return (<SafeInfoCard
            wrt_dt={itemData.wrtDt}
            title={itemData.title}
            txt_origin_cn={itemData.contentHtml}
            showDetailHandler={props.showDetailHandler}
        />)
    }

    return (

        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            {!entryResult && <Text>
                {nation}의 입국 허가 요건에 대한 정보가 없습니다.
            </Text>}
            {entryResult.length > 0 &&
                <EntryCard
                    itemData={entryResult[0]}
                    doNeedPspt={doNeedPspt}
                    remarkExist={remarkExist}
                />}
            <View>
                {policyList && <FlatList
                    data={policyList}
                    keyExtractor={(item) => item.title}
                    renderItem={renderPolicyItem}
                />}
            </View>

            {/* {videoItems.length > 0 && <YouTubeList
                        videoItems={videoItems}
                    />} */}
            <CustomButton onSelect={() => props.screenConvert(0)}>
                뒤로 가기
            </CustomButton>
        </View>

    )
}

const styles = StyleSheet.create({

});

export default EntryScreen;

