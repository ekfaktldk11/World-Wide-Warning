import React, { useState, useEffect } from 'react';
import { View, FlatList, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Nations } from '../data/dummy-data';
import { Icon } from 'native-base';

import TouchableTab from './TouchableTab';

const SearchComponent = props => {
    const [query, setQuery] = useState('');
    const [filteredNationList, setFilteredNationList] = useState([]);
    useEffect(() => {
        setFilteredNationList(Nations.slice());
    }, [])

    const showEnableHandler = () => {
        console.log("call showEnableHandler")
        props.setRenderDisable();
    }

    const updateQuery = (text) => {
        console.log(text);
        if (text) {
            let nationList = Nations.filter(function (item) {
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
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.screen}
            
        >
            <SearchBar
                onPressIn={showEnableHandler}
                round
                backgroundColor={'white'}
                clearIcon={{ size: 24 }}
                //rightIconContainerStyle={styles.searchBar}
                //leftIconContainerStyle={styles.searchBar}
                inputStyle={styles.searchBar}
                inputContainerStyle={styles.searchBar}
                containerStyle={{ ...styles.searchBar, ...{ borderWidth: 1, borderRadius: 5 } }}
                searchIcon={{ size: 24 }}
                onChangeText={updateQuery}
                value={query}
                placeholder="나라 검색"
            />
            {!props.renderHomeImage && <View style={styles.listContainer}><FlatList
                data={filteredNationList}
                keyExtractor={(item) => item.iso}
                renderItem={renderFilteredItem}
            /></View>}
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        justifyContent: 'center',
        marginVertical: 10,
        paddingHorizontal: 5
    },
    searchBar: {
        backgroundColor: 'white'
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5
    },
    listContainer: {
        // alignContent: 'center'
    }
    // filteredInfo: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'space-around'
    // }
});

export default SearchComponent;