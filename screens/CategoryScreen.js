import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CovidScreen from './CovidScreen';
import EntryScreen from './EntryScreen';
import SafeInfoScreen from './SafeInfoScreen';
import CategoryCard from '../components/CategoryCard';
import {
    fetchEntry,
    fetchSafety,
    fetchWeeklyConfirmed,
    fetchWeeklyRecoverd,
    fetchWeeklyDeceased,
    fetchDailyTotal,
    fetchEntryPolicy,
    entryDataProcess
} from '../temp/fetchData';
import colors from '../constants/colors'

const CategoryScreen = props => {
    const [screenNum, setScreenNum] = useState(0);
    const [entryResult, setEntryResult] = useState([]);
    const [safetyResult, setSafetyResult] = useState([]);
    const [processedDataList, setProcessedDataList] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [weeklyConfirmed, setWeeklyConfirmed] = useState(null);
    const [weeklyRecoverd, setWeeklyRecoverd] = useState(null);
    const [weeklyDeceased, setWeeklyDeceased] = useState(null);
    const [dailyReport, setDailyReport] = useState();

    const { route } = props;

    const nation = route.params.nation;
    const iso = route.params.iso;

    useEffect(() => {
      fetchEntryPolicy().then((result => {
        let data = entryDataProcess(result);
        setProcessedDataList(data);
      })).catch((err) => {
          console.log(err);
      });
    },[]);

    useEffect(() => {
        fetchEntry(nation, iso)
            .then((result) => setEntryResult(result));
        fetchWeeklyConfirmed(iso)
            .then((response) => response.json()).then((json) => {
                setWeeklyConfirmed(json.data)
            }).catch((err) => {
                console.log(err);
            });
        fetchWeeklyRecoverd(iso)
            .then((response) => response.json()).then((json) => {
                setWeeklyRecoverd(json.data)
            }).catch((err) => {
                console.log(err);
            });
        fetchWeeklyDeceased(iso)
            .then((response) => response.json()).then((json) => {
                setWeeklyDeceased(json.data)
            }).catch((err) => {
                console.log(err);
            });
        fetchDailyTotal(iso)
            .then((response) => response.json()).then((json) => {
                setDailyReport(json.data.Stats);
            }).catch((err) => {
                console.log(err);
            });
        // fetchRegionalByCountry(iso)
        //     .then((response) => response.json()).then((json) => {
        //         let regionalReport = json.data
        //     }).catch((err) => {
        //         console.log(err);
        //     });
        //await 가 들어간 함수의 결과는 promise 를 return
    }, []);

    useEffect(() => {
        fetchSafety(nation, iso, pageNum)
            .then((result) => setSafetyResult(result));
    }, [pageNum]);

    const setPageNumUp = () => {
        setPageNum(pageNum + 1)
    };

    const setPageNumDown = () => {
        setPageNum(pageNum - 1)
    };

    const showDetailHandler = (origin_txt) => {
        props.navigation.navigate('Detail', {
            detailInfo: origin_txt
        })
    }

    const showCoronaDshBrd = () => {
        props.navigation.navigate('CBoard', {
            iso: iso.toLowerCase()
        })
    }

    const screenConvertHandler = num => {
        setScreenNum(num)
    };

    let content;

    switch (screenNum) {
        case 1:
            content = <CovidScreen
                weeklyConfirmed={weeklyConfirmed}
                weeklyRecoverd={weeklyRecoverd}
                weeklyDeceased={weeklyDeceased}
                dailyReport={dailyReport}
                // iso={iso.toLowerCase()}
                // showCoronaDshBrd={showCoronaDshBrd}
                screenConvert={screenConvertHandler} />
            break
        case 2:
            content = <EntryScreen
                nation={nation}
                entryResult={entryResult}
                entryPolicy={processedDataList}
                showDetailHandler={showDetailHandler}
                screenConvert={screenConvertHandler} />
            break
        case 3:
            content = <SafeInfoScreen
                nation={nation}
                safetyResult={safetyResult}
                showDetailHandler={showDetailHandler}
                screenConvert={screenConvertHandler}
                pageNum={pageNum}
                setPageNumUp={setPageNumUp}
                setPageNumDown={setPageNumDown} />
            break
        default:
            content = <View style={{flex: 1, backgroundColor: colors.accent}}><View style={{height: '5%'}}></View><CategoryCard
                onSelect={() => screenConvertHandler(1)}
                image={require('../data/corona.png')}
                title="코로나 현황"
            />
                <CategoryCard
                    onSelect={() => screenConvertHandler(2)}
                    image={require('../data/entry.png')}
                    title="입국 허가 요건"
                />
                <CategoryCard
                    onSelect={() => screenConvertHandler(3)}
                    image={require('../data/info.png')}
                    title="안전 정보"
                /></View>
            break
    }

    return (
        <View style={styles.screen}>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default CategoryScreen;

