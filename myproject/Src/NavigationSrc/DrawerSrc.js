import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideBar from './SideBar';
import Profile from './Profile';
import Services from './Services';
import AboutUs from './AboutUs'
import FindColearner from './FindColearner';
import ChatSrc from '../BotSrc/ChatSrc';
import Home from './Home';


const Drawer = createDrawerNavigator();


export default function DrawerSrc() {
  return (
    <Drawer.Navigator drawerContent={props => <SideBar {...props} />}>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Find Co-learner" component={FindColearner} />
    </Drawer.Navigator>

  )
}