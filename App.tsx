import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HelloScreen from './src/screens/HelloScreen';
import {Signup} from './src/screens/Signup';
import {Loginn} from './src/screens/Login';
import { HomeScreen } from './src/screens/HomeScreen';
import { TabScreen } from './src/screens/TabScreen';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = (props: JSX.Element) => {

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Hello" component={HelloScreen} />
        <Stack.Screen name="TabScreen" component={TabScreen} />
        <Stack.Screen name="Login" component={Loginn} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
