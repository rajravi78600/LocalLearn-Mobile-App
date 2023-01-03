import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';
import Services from './Services';
import AboutUs from './AboutUs';
import FindColearner from './FindColearner';
import SideBar from './SideBar';
import ChatSrc from '../BotSrc/ChatSrc';


const Drawer = createDrawerNavigator();
export default function Home() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: '#ffffff',
        width: '100%',
      },
      drawerPosition: 'right'
    }}

      drawerContent={props => <SideBar {...props} />}
    >
      <Drawer.Screen name="ChatSrc" component={ChatSrc} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Find Co-learner" component={FindColearner} />
    </Drawer.Navigator>
  )
}