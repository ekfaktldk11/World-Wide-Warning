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
    fetchRegionalByCountry
} from '../temp/fetchData';


const CategoryScreen = props => {
    const [screenNum, setScreenNum] = useState(0);
    const [entryResult, setEntryResult] = useState([]);
    const [safetyResult, setSafetyResult] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [weeklyConfirmed, setWeeklyConfirmed] = useState(null);
    const [weeklyRecoverd, setWeeklyRecoverd] = useState(null);
    const [weeklyDeceased, setWeeklyDeceased] = useState(null);
    const [dailyReport, setDailyReport] = useState();

    const { route } = props;

    const nation = route.params.nation;
    const iso = route.params.iso;


    useEffect(() => {
        fetchEntry(nation, iso)
            .then((result) => setEntryResult(result));
        fetchWeeklyConfirmed(iso)
            .then((response) => response.json()).then((json) => {
                setWeeklyConfirmed(json.data)
                // let weeklyConfirmed = Object.keys(json.data).map((key) => [key, json.data[key]])
                console.log(weeklyConfirmed);
            }).catch((err) => {
                console.log(err);
            });
        fetchWeeklyRecoverd(iso)
            .then((response) => response.json()).then((json) => {
                setWeeklyRecoverd(json.data)
                console.log(weeklyRecoverd);
            }).catch((err) => {
                console.log(err);
            });
        fetchWeeklyDeceased(iso)
            .then((response) => response.json()).then((json) => {
                setWeeklyDeceased(json.data)
                console.log(weeklyDeceased);
            }).catch((err) => {
                console.log(err);
            });
        fetchDailyTotal(iso)
            .then((response) => response.json()).then((json) => {
                setDailyReport(json.data.Stats);
                console.log(dailyReport);
            }).catch((err) => {
                console.log(err);
            });
        fetchRegionalByCountry(iso)
            .then((response) => response.json()).then((json) => {
                let regionalReport = json.data
                //console.log(regionalReport);
            }).catch((err) => {
                console.log(err);
            });
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
            content = <><CategoryCard
                onSelect={() => screenConvertHandler(1)}
                title="감염병 정보"
            />
                <CategoryCard
                    onSelect={() => screenConvertHandler(2)}
                    title="입국 허가 요건"
                />
                <CategoryCard
                    onSelect={() => screenConvertHandler(3)}
                    title="안전 정보"
                /></>
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

