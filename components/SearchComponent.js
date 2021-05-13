import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Nations } from '../data/dummy-data';

import TouchableTab from './TouchableTab';

const SearchComponent = props => {
    console.log('reRendered');
    const [query, setQuery] = useState('');
    const [showEnable, setShowEnable] = useState(false);
    const [filteredNationList, setFilteredNationList] = useState([]);
    useEffect(() => {
        setFilteredNationList(Nations.slice());
    }, [])

    // console.log('filteredNationList');
    // console.log(filteredNationList);

    const showEnableHandler = () => {

        props.setRenderDisable();
        setShowEnable(true);
    }

    const showDisableHandler = () => {

        props.setRenderEnable();
        setShowEnable(false);
    }

    const updateQuery = (text) => {
        console.log(text);
        if (text) {
            let nationList = Nations.filter(function (item) {
                console.log('item?');
                console.log(item);
                console.log(item.nation.startsWith(text, 0));
                return item.nation.startsWith(text, 0) === true;
            })
            console.log('nationList');
            console.log(nationList);
            setFilteredNationList(nationList);
            setQuery(text);
        } else {
            setFilteredNationList(Nations.slice());
            setQuery(text);
        }
    }

    // const pressItemHandler = (item) => {
    //     console.log('pressed');
    //     props.navigation.navigate('Info', {
    //         flagPath: item.flag,
    //         nation: item.nation,
    //         iso: item.iso
    //     });
    //     // props.navigation.navigate({
    //     //      routeName: 'Info', params : {
    //     //          flagPath : item.flag,
    //     //          nation : item.nation,
    //     //          iso : item.iso
    //     //      }
    //     //  })
    // }

    const renderFilteredItem = (itemData) => {
        if (!query) return;
        console.log(itemData);
        const country = itemData.item;

        return (
            <TouchableTab
                selectedNation={country}
                onSelect={() => props.navigateToInfo(country)}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <SearchBar
                onChangeText={updateQuery}
                value={query}
                placeholder="나라 검색"
                onFocus={showEnableHandler}
            //onBlur={showDisableHandler}
            />
            {showEnable && <FlatList
                data={filteredNationList}
                keyExtractor={(item) => item.iso}
                renderItem={renderFilteredItem}
            />}
        </View>
    )
}

SearchComponent.navigationOptions = navData => {
    return {

    }
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5
    },
    // filteredInfo: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'space-around'
    // }
});

export default SearchComponent;