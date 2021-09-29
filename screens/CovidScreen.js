import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, ScrollView, Text, LogBox, StyleSheet, Linking, Button, processColor } from 'react-native';
import GraphCard from '../components/GraphCard';
import CustomButton from '../components/CustomButton';
import ReportCard from '../components/ReportCard';
import colors from '../constants/colors';

const CovidScreen = props => {
  const [isLoading, setIsLoading] = useState(true);
  LogBox.ignoreLogs(['Warning: Failed prop type'])

  const {
    weeklyConfirmed,
    weeklyRecoverd,
    weeklyDeceased,
    dailyReport
  } = props;

  const dataLoading = (a, b, c) => {
    if (a == null || b == null || c == null) return;
    else {
      setIsLoading(false);
      return
    }
  }

  const weeklyDataProcess = (weeklyData) => {
    let keyList = Object.keys(weeklyData).map((key) => key)
    let dataList = Object.keys(weeklyData).map((key) => weeklyData[key])
    let temp = {
      barChartData: {
        dataSets: [{
          values: dataList,
          config: {
            color: processColor(colors.primary),
            highlightAlpha: 255,
            highlightColor: processColor(colors.accent),
          },
        }],
        config: {
          barWidth: 0.7,
        },
      },
      legend: {
        enabled: false,
      },
      highlights: [{ x: 3 }],
      xAxis: {
        valueFormatter: keyList,
        position: 'BOTTOM',
        granularityEnabled: true,
        granularity: 1,
        drawGridLines: false,
        drawAxisLine: false,
        drawLabels: true,
      },
      yAxis: {
        left: {
          drawLabels: false,
          drawAxisLine: false,
          drawGridLines: false,
        },
        right: {
          drawLabels: false,
          drawAxisLine: false,
          drawGridLines: false,
        },
      },
      description: {
        text: '',
      },
    }
    return temp;
  }
  let confirmedData;
  let recoverdData;
  let deceasedData;
  if (!isLoading) {
    confirmedData = weeklyDataProcess(weeklyConfirmed);
    recoverdData = weeklyDataProcess(weeklyRecoverd);
    deceasedData = weeklyDataProcess(weeklyDeceased);
  }


  if (isLoading) {
    setTimeout(function () {
      dataLoading(weeklyConfirmed,
        weeklyRecoverd, weeklyDeceased)
    }, 1000)
    return (
      <ActivityIndicator
        animating={true}
        color="#0000ff"
        style={styles.indicator}
        size="large"
      />
    )
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.cardContainer}>
        <ReportCard dailyReport={dailyReport[2]}>
          확진자
        </ReportCard>
        <ReportCard dailyReport={dailyReport[3]}>
          완치자
        </ReportCard>
        <ReportCard dailyReport={dailyReport[4]}>
          사망자
        </ReportCard>
      </View>
      <GraphCard
        reportedData={confirmedData}
        reportedType={'주간 확진자'}
      />
      <GraphCard
        reportedData={recoverdData}
        reportedType={'주간 완치자'}
      />
      <GraphCard
        reportedData={deceasedData}
        reportedType={'주간 사망자'}
      />
      <CustomButton onSelect={() => props.screenConvert(0)}>
        뒤로 가기
      </CustomButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  }
});

export default CovidScreen;

