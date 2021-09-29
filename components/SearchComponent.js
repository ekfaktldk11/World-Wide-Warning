import React, { useState, useEffect } from 'react';
import { View, FlatList, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Nations } from '../data/dummy-data';
import TouchableTab from './TouchableTab';

const SearchComponent = props => {
    const [query, setQuery] = useState('');
    const [filteredNationList, setFilteredNationList] = useState([]);
    useEffect(() => {
        setFilteredNationList(Nations.slice());
    }, [])

    const showEnableHandler = () => {
        props.setRenderDisable();
    }

    const updateQuery = (text) => {
        if (text) {
            let nationList = Nations.filter(function (item) {
                return item.nation.startsWith(text, 0) === true;
            })
            setFilteredNationList(nationList);
            setQuery(text);
        } else {
            setFilteredNationList(Nations.slice());
            setQuery(text);
        }
    }

    const renderFilteredItem = (itemData) => {
        if (!query) return;
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
                inputStyle={styles.searchBar}
                inputContainerStyle={styles.searchBar}
                containerStyle={{ ...styles.searchBar, ...{ borderWidth: 1, borderRadius: 5 } }}
                searchIcon={{ size: 24 }}
                onChangeText={updateQuery}
                value={query}
                placeholder="나라 검색"
            />
            {!props.renderHomeImage && <FlatList
                data={filteredNationList}
                keyExtractor={(item) => item.iso}
                renderItem={renderFilteredItem}
            />}
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
    }
});

export default SearchComponent;