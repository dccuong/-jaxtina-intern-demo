import React from 'react'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test1 from './Test1';
import Test2 from './Test2';
import { HomeStackScreen } from './HomeStackScreen';

export const MainTabScreen = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{headerShown:false
        }}>
            <Tab.Screen name="Homestack" component={HomeStackScreen} />
            <Tab.Screen name="Home3" component={Test1} />
            <Tab.Screen name="Home4" component={Test2} />
        </Tab.Navigator>
    )
}

