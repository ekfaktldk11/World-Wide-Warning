import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, ScrollView, Text, LogBox, StyleSheet, Linking, Button, processColor } from 'react-native';
import { BarChart } from 'react-native-charts-wrapper';

const CovidScreen = props => {
  const [isLoading, setIsLoading] = useState(true);

  LogBox.ignoreLogs(['Warning: Failed prop type'])
  console.log(isLoading);

  const {
    weeklyConfirmed,
    weeklyRecoverd,
    weeklyDeceased,
    dailyReport
  } = props;
  console.log(dailyReport);

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
            color: processColor('#e8b99d'),
            highlightAlpha: 255,
            highlightColor: processColor('#C95109'),
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
  console.log(confirmedData);

  //let base = `https://covid19.who.int/region/amro/country/${iso}`

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
        <View style={styles.card}>
          <Text style={{fontWeight: 'bold'}}>확진자</Text>
          <Text>{dailyReport[2] == "0" ? 'no data' : dailyReport[2]}</Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontWeight: 'bold'}}>완치자</Text>
          <Text>{dailyReport[3] == "0" ? 'no data' : dailyReport[3]}</Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontWeight: 'bold'}}>사망자</Text>
          <Text>{dailyReport[4] == "0" ? 'no data' : dailyReport[4]}</Text>
        </View>
      </View>
      <View style={styles.graphTitleBox}>
        <Text style={styles.graphTitle}>주간 확진자</Text>
      </View>
      <BarChart style={{ height: 200, marginBottom: 10 }}
        data={confirmedData.barChartData}
        xAxis={confirmedData.xAxis}
        yAxis={confirmedData.yAxis}
        animation={{
          durationY: 1000,
          easingY: 'EaseOutQuad',
        }}
        gridBackgroundColor={processColor('#ffffff')}
        drawHighlightArrow
        drawBarShadow={false}
        highlights={confirmedData.highlights}
        drawBorders={false}
        legend={confirmedData.legend}
        noDataText="no data available"
        chartDescription={confirmedData.description}
        drawValueAboveBar
        scaleEnabled={false}
        dragEnabled={false}
        pinchZoom={false}
        doubleTapToZoomEnabled={false}
      />
      <View style={styles.graphTitleBox}>
        <Text style={styles.graphTitle}>주간 완치자</Text>
      </View>
      <BarChart style={{ height: 200, marginBottom: 10 }}
        data={recoverdData.barChartData}
        xAxis={recoverdData.xAxis}
        yAxis={recoverdData.yAxis}
        animation={{
          durationY: 1000,
          easingY: 'EaseOutQuad',
        }}
        gridBackgroundColor={processColor('#ffffff')}
        drawHighlightArrow
        drawBarShadow={false}
        highlights={recoverdData.highlights}
        drawBorders={false}
        legend={recoverdData.legend}
        noDataText="no data available"
        chartDescription={recoverdData.description}
        drawValueAboveBar
        scaleEnabled={false}
        dragEnabled={false}
        pinchZoom={false}
        doubleTapToZoomEnabled={false}
      />
      <View style={styles.graphTitleBox}>
        <Text style={styles.graphTitle}>주간 사망자</Text>
      </View>
      <BarChart style={{ height: 200, marginBottom: 10 }}
        data={deceasedData.barChartData}
        xAxis={deceasedData.xAxis}
        yAxis={deceasedData.yAxis}
        animation={{
          durationY: 1000,
          easingY: 'EaseOutQuad',
        }}
        gridBackgroundColor={processColor('#ffffff')}
        drawHighlightArrow
        drawBarShadow={false}
        highlights={deceasedData.highlights}
        drawBorders={false}
        legend={deceasedData.legend}
        noDataText="no data available"
        chartDescription={deceasedData.description}
        drawValueAboveBar
        scaleEnabled={false}
        dragEnabled={false}
        pinchZoom={false}
        doubleTapToZoomEnabled={false}
      />
      <Button title='Back' onPress={() => props.screenConvert(0)} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    height: 60
  },
  card: {
    flex: 1,
    alignItems: 'center'
  },
  graphTitleBox: {
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
    paddingTop: 5
  },
  graphTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  }
});

export default CovidScreen;

