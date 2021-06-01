import React from 'react';
import { View, TouchableNativeFeedback, Image, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const InfoCard = props => {
    const { itemData } = props;
    return (
        <View style={styles.cardContainer}>
            {props.doNeedPspt(itemData.gnrl_pspt_visa_yn) && (
                <View style={styles.card}>
                    <Text style={styles.textBold}>일반여권 허가 기간 : </Text>
                    <Text style={styles.text}>
                        {itemData.gnrl_pspt_visa_cn}
                    </Text>
                </View>)}
            {props.doNeedPspt(itemData.ofclpspt_visa_yn) && (
                <View style={styles.card}>
                    <Text style={styles.textBold}>
                        관용여권 허가 기간 :
                    </Text>
                    <Text style={styles.text}>
                        {itemData.ofclpspt_visa_cn}
                    </Text>
                </View>)}
            {props.doNeedPspt(itemData.dplmt_pspt_yn) && (
                <View style={styles.card}>
                    <Text style={styles.textBold}>
                        외교관여권 허가 기간 :
                    </Text>
                    <Text style={styles.text}>
                        {itemData.country_nm}
                    </Text>
                </View>)}
            {props.remarkExist(itemData.remark) && (
                <View style={styles.card}>
                    <Text style={styles.textBold}>
                        비고 :
                    </Text>
                    <Text style={styles.text}
                    >
                        {itemData.remark}
                    </Text>
                </View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginTop : 10,
        flex: 1,
        width: '95%',
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 10,
        elevation: 2,
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    card:{
        flex: 1,
        flexDirection: 'row',
    },
    textBold: {
        marginVertical: 10,
        marginHorizontal: 5,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 5,
        fontSize: 18
    }
})

export default InfoCard