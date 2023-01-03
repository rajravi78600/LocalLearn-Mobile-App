import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashSrc from './Src/SplashScreen/SplashSrc'
import RegisterSrc from './Src/registerScreens/RegisterSrc'
import OtpSrc from './Src/registerScreens/OtpSrc'
import PasswordSetsrc from './Src/registerScreens/PasswordSetsrc'
import LoginSrc from './Src/registerScreens/LoginSrc';
import ImageSrc from './Src/SplashScreen/ImageSrc';
import OptionSrc1 from './Src/OptionSrc/OptionSrc1';
import OptionSrc2 from './Src/OptionSrc/OptionSrc2';
import OptionSrc3 from './Src/OptionSrc/OptionSrc3';
import OptionSrc4 from './Src/OptionSrc/OptionSrc4';
import WelcomeSrc from './Src/BotSrc/WelcomeSrc';
import BotHomeSrc from './Src/BotSrc/BotHomeSrc';
import ChatSrc from './Src/BotSrc/ChatSrc';
import Drawers from './componets/Drawers';
import DrawerSrc from './Src/NavigationSrc/DrawerSrc';
import Home from './Src/NavigationSrc/Home';
import TestPage from './utils/TestPage';
import TestPage2 from './utils/TestPage2';
import AboutUs from './Src/NavigationSrc/AboutUs';
import Profile from './Src/NavigationSrc/Profile';
const Stack = createNativeStackNavigator();
export default function MainScreen() {







  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    console.log('Authorization status(authStatus):', authStatus)
    return (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    )
  };
  useEffect(() => {
    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then((fcmToken) => {
          console.log('FCM token -> ', fcmToken)
        });
    } else console.log('not Autho status', authStatus)
  }, [])





  return (

    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator
        initialRouteName='SplashSrc'
      >
        <Stack.Screen name="SplashSrc" component={SplashSrc} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterSrc} options={{ headerShown: false }} />
        <Stack.Screen name="OtpSrc" component={OtpSrc} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordSetsrc" component={PasswordSetsrc} options={{ headerShown: false }} />
        <Stack.Screen name="LoginSrc" component={LoginSrc} options={{ headerShown: false }} />
        <Stack.Screen name="ImageSrc" component={ImageSrc} options={{ headerShown: false }} />
        <Stack.Screen name="OptionSrc1" component={OptionSrc1} options={{ headerShown: false }} />
        <Stack.Screen name="OptionSrc2" component={OptionSrc2} options={{ headerShown: false }} />
        <Stack.Screen name="OptionSrc3" component={OptionSrc3} options={{ headerShown: false }} />
        <Stack.Screen name="OptionSrc4" component={OptionSrc4} options={{ headerShown: false }} />
        <Stack.Screen name="WelcomeSrc" component={WelcomeSrc} options={{ headerShown: false }} />
        <Stack.Screen name="BotHomeSrc" component={BotHomeSrc} options={{ headerShown: false }} />
        <Stack.Screen name="Drawers" component={Drawers} options={{ headerShown: false }} />
        <Stack.Screen name="ChatSrc" component={ChatSrc} options={{ headerShown: false }} />
        <Stack.Screen name="DrawerSrc" component={DrawerSrc} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="TestPage" component={TestPage} />
        <Stack.Screen name="TestPage2" component={TestPage2} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="AboutUs" component={AboutUs} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',


  },
  textworld: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  }
})