import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HelloScreen from './src/screens/HelloScreen';
import { Signup } from './src/screens/Signup';
import { Loginn } from './src/screens/Login';
import { TabScreen } from './src/screens/TabScreen';
import './src/localization/i18n';
import { useWindowDimensions } from 'react-native';
import { globalDimension } from './src/scaling-utils';
import ThemeProvider from './src/ThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createStackNavigator();
const App = (props: JSX.Element) => {
  const { height, width } = useWindowDimensions()

  globalDimension.widthh = width
  console.log(globalDimension.widthh, "test2")
  useEffect(() => {
    globalDimension.widthh = width
    console.log(globalDimension.widthh, "test")
  }, [width]
  )
  return (

    <ThemeProvider>
      <SafeAreaProvider>
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
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
