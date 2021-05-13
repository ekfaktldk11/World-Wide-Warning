import React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from './navGroups/MainTab';
import GlobeScreen from '../screens/GlobeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import HeaderTitle from '../components/HeaderTitle';
import ShowDetailScreen from '../screens/ShowDetailScreen';
import CoronaBoard from '../screens/CoronaBoard';

const Stack = createStackNavigator();

const SysNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Main'
            >
                <Stack.Screen
                    name='Main'
                    component={MainTab}
                />
                <Stack.Screen
                    name='Globe'
                    component={GlobeScreen}

                />
                <Stack.Screen
                    options={({ route }) => ({
                        title:
                            <HeaderTitle
                                imgEnable={true}
                                title={route.params.nation}
                                imgSource={route.params.flag}
                            />

                    })
                    }
                    name='Info'
                    component={CategoryScreen}
                />
                <Stack.Screen 
                    name='CBoard'
                    component={CoronaBoard}
                />
                <Stack.Screen 
                    name='Detail'
                    component={ShowDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SysNavigator;