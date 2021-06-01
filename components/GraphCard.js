import React from 'react';
import { View, Text, StyleSheet, processColor} from 'react-native';
import colors from '../constants/colors';
import {BarChart} from 'react-native-charts-wrapper';

const GraphCard = props => {

    const { reportedData, reportedType } = props
    console.log(reportedData);

    return (
        <View style={styles.cardContainer}>
            <View style={styles.graphTitleBox}>
                <Text style={styles.graphTitle}>{reportedType}</Text>
            </View>
            <BarChart style={{ height: 200, marginBottom: 10 }}
                data={reportedData.barChartData}
                xAxis={reportedData.xAxis}
                yAxis={reportedData.yAxis}
                animation={{
                    durationY: 1000,
                    easingY: 'EaseOutQuad',
                }}
                gridBackgroundColor={processColor('#ffffff')}
                drawHighlightArrow
                drawBarShadow={false}
                highlights={reportedData.highlights}
                drawBorders={false}
                legend={reportedData.legend}
                noDataText="no data available"
                chartDescription={reportedData.description}
                drawValueAboveBar
                scaleEnabled={false}
                dragEnabled={false}
                pinchZoom={false}
                doubleTapToZoomEnabled={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        borderWidth: 2,
        borderColor: colors.accent,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        elevation: 2
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
    }
})

export default GraphCard;