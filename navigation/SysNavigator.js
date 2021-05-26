import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from './navGroups/MainTab';
import HomeScreen from '../screens/HomeScreen';
import GlobeScreen from '../screens/GlobeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import HeaderTitle from '../components/HeaderTitle';
import ShowDetailScreen from '../screens/ShowDetailScreen';
import CoronaBoard from '../screens/CoronaBoard';
import colors from '../constants/colors';

const Stack = createStackNavigator();

const SysNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
            >
                <Stack.Screen
                    options={({ route }) => ({
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: colors.primary
                        }
                    })
                    }
                    name='Home'
                    component={HomeScreen}
                />
                <Stack.Screen
                    options={({ route }) => ({
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: colors.primary
                        }
                    })
                    }
                    name='Globe'
                    component={GlobeScreen}

                />
                <Stack.Screen
                    options={({ route }) => ({
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: colors.primary
                        },
                        headerRight: () => (
                            <View style={{ width: 60, height: 40}}>
                                <Text style={{ paddingTop: 5,textAlign: 'center', color: colors.code, fontSize: 20, fontWeight: 'bold' }}>{route.params.iso}</Text>
                            </View>
                        ),
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
                    options={({ route }) => ({
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: colors.primary
                        }
                    })
                    }
                    name='CBoard'
                    component={CoronaBoard}
                />
                <Stack.Screen
                    options={({ route }) => ({
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: colors.primary
                        }
                    })
                    }
                    name='Detail'
                    component={ShowDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SysNavigator;