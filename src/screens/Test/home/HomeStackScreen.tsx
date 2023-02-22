import React from 'react';
import HomeScreen from './HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

export const HomeStackScreen = () => {
    
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
            
        </Stack.Navigator>
    )
}
