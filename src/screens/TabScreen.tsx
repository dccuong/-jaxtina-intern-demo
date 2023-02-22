import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Image, View } from 'react-native'
import { tabBarComponent } from '../component/tabBarComponent';
import { HomeScreen } from './HomeScreen';
import Test1 from './Test/home/Test1';
import Test2 from './Test/home/Test2';
const Tab = createBottomTabNavigator();
export const TabScreen = () => {
    return (


        <Tab.Navigator
            tabBar={tabBarComponent}
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Sách" component={HomeScreen} />
            <Tab.Screen
                name="Phát Âm" component={Test1} />
            <Tab.Screen
                name="Khóa học" component={Test2} />
            <Tab.Screen
                name="Tiện ích" component={Test1} />
            <Tab.Screen
                name="Cá nhân" component={Test2} />

        </Tab.Navigator>

    )
}