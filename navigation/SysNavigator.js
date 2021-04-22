import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from './navGroups/MainTab';
import GlobeScreen from '../screens/GlobeScreen';
import CategoryScreen from '../screens/CategoryScreen';

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
                    name='Info'
                    component={CategoryScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SysNavigator;