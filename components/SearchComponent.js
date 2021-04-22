import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Nations } from '../data/dummy-data';

const SearchComponent = props => {
    console.log('reRendered');
    const [query, setQuery] = useState('');
    //const [isLoading, setIsLoading] = useState(true);
    const [showEnable, setShowEnable] = useState(false);
    const [filteredNationList, setFilteredNationList] = useState([]);
    useEffect(() => {
        setFilteredNationList(Nations.slice());
    }, [])

    console.log('filteredNationList');
    console.log(filteredNationList);
    //const [nationList, setNationList] = useState([]);

    //const [filteredNation, setFilteredNation] = useState(Country);
    //console.log(nationList);
    const showEnableHandler = () => {
        //console.log('ShowEnableHandler Run...');
        props.setRenderDisable();
        setShowEnable(true);
    }

    const showDisableHandler = () => {
        //console.log('ShowDisableHandler Run...');
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

    const renderFilteredItem = (itemData) => {
        if (!query) return;
        console.log(itemData);
        const country = itemData.item;
        //console.log(`Ele of List : ${country}`);
        // console.log(country);
        // let search = query;
        // let filteredNation;
        // const filePathToData = '../data';
        // if (country.item.nation.startsWith(search, 0)) {
        //     filteredNation = country.item;
        //     //console.log(nationList.length);
        //     //console.log(country);
        // } else {
        //     nationList.splice(nationList.indexOf(country), 1);
        //     return
        // }
        return (
            <View style={styles.filteredInfo}>
                {/* <Image source={require(
                    filePathToData + filteredNation.flag)}
                /> */}
                <Text>{country.nation}</Text>
                <Text>{country.iso}</Text>
            </View>
        )
    }

    // useEffect(() => {
    //     renderFilteredItem;
    //     showDisableHandler;
    //     showEnableHandler;
    //     updateQuery;
    // },[])


    // const filterNames = (country) => {
    //     let search = query;
    //     if (country.nation.startsWith(search, 0)) {
    //         return country;
    //     } else {
    //         Nations.splice(Nations.indexOf(country), 1);
    //         return null;
    //     }
    // }

    return (
        <View style={styles.screen}>
            <SearchBar
                onChangeText={updateQuery}
                value={query}
                placeholder="나라 검색"
                onFocus={showEnableHandler}
                onBlur={showDisableHandler}
            />
            {showEnable && <FlatList
                //ListHeaderComponent={isLoading && <ActivityIndicator />}
                data={filteredNationList}
                keyExtractor={(item) => item.iso}
                renderItem={renderFilteredItem}
            />}
        </View>
    )
}

// SearchScreen.navigationOptions = navData => {
//     return {
//         headerShown : false
//     }
// }

const styles = StyleSheet.create({
    screen: {
        width: '100%',
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5
    },
    filteredInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default SearchComponent;