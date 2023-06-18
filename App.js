import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const AuthStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require("./assets/fonts/Roboto-Regular.ttf"),
    'Roboto-Medium': require("./assets/fonts/Roboto-Medium.ttf"),
    'Kablammo': require("./assets/fonts/Kablammo-Regular-VariableFont_MORF.ttf"),
  });
  useEffect(()=>{
    const onLayoutRootView = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    onLayoutRootView();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
 
  //  return (
  //    <View style={{flex: 1}}>
  //     {/*  <LoginScreen/>*/}
  //      <RegisterScreen/> 
  //    </View>
  //   );
   return (
     <NavigationContainer>
       <AuthStack.Navigator>
        <AuthStack.Screen options={{headerShown: false,}} name="Login" component={LoginScreen} />
        <AuthStack.Screen options={{headerShown: false,}} name="Register" component={RegisterScreen} />
       </AuthStack.Navigator>
     </NavigationContainer>
   );
}

