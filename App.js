import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from './router';
import * as SplashScreen from 'expo-splash-screen';
import { store } from './redax/store';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const routing = useRoute(false)
 // const routing = useRoute({}) //нижнее меню
  //const routing = useRoute(null) //регистр логин
 
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require("./assets/fonts/Roboto-Regular.ttf"),
    'Roboto-Medium': require("./assets/fonts/Roboto-Medium.ttf"),
    //для перевірки
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
     <Provider store={store}>
     <NavigationContainer>
      {routing}
      </NavigationContainer>
    </Provider>
   );
}

 