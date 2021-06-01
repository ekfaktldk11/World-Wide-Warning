import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const ReportCard = props => {
    
    const { dailyReport } = props;

    return (
        <View style={styles.card}>
          <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
          <Text>{dailyReport == "0" ? 'no data' : dailyReport.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '27%',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: colors.primary,
        margin: 5,
        marginTop: 10,
        borderRadius: 5,
        elevation:3
    },
})

export default ReportCard;