import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import TouchableInfoDetail from '../components/TouchableInfoDetail'
const SafeInfoCard = props => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardFlexDirection}>
                <Text style={styles.dateText}>
                    {props.wrt_dt}
                </Text>
                <Text style={styles.titleText}
                    numberOfLines={2}
                >
                    {props.title}
                </Text>
                <TouchableInfoDetail
                    onFocusDetail={() => props.showDetailHandler(props.txt_origin_cn)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer : {
        borderWidth: 3,
        borderColor: colors.primary,
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'white',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4
    },
    cardFlexDirection : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateText : {
        flex: 3,
        fontSize: 11,
        textAlign: 'center'
    },
    titleText: {
        flex: 10,
        fontSize: 12,
        textAlign: 'center'
    }
})

export default SafeInfoCard;