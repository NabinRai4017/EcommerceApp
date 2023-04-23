import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen, CartScreen, SearchScreen} from './screens';
import TabItem from './tabItem'
import {SHADOWS, icons} from '../constants'
import styles from '../styles/tabs.style';


import React from 'react';


const Tab = createBottomTabNavigator();



const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    ...styles.tabBarStyle,
                    ...SHADOWS.medium
                    
                }
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <TabItem title='HOME' source={icons.home} focused={focused}/>
                ),
            }} />
            <Tab.Screen name='Search' component={SearchScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <TabItem title='SEARCH' source={icons.search} focused={focused}/>
                ),
            }} />
            <Tab.Screen name='Cart' component={CartScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <TabItem title='FAV' source={icons.heart} focused={focused}/>
                ),
            }} />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <TabItem title='PROFILE' source={icons.profile} focused={focused}/>
                ),
            }} />
        </Tab.Navigator>
    );
}


export default Tabs;

