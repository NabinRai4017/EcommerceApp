import { StyleSheet, View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './search';
import CartScreen from './cart';
import ProfileScreen from './profile';
import HomeScreen from './home';
import TabItem from './tabItem'

import {SHADOWS, icons} from '../constants'

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                title: null,
                tabBarShowLabel: false,
                tabBarStyle: {
                    ...styles.tabBarStyle,
                    ...SHADOWS.medium
                }
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    TabItem('HOME', icons.home, focused)
                ),
            }} />
            <Tab.Screen name='Search' component={SearchScreen} options={{
                tabBarIcon: ({ focused }) => (
                    TabItem('SEARCH', icons.search, focused)
                ),
            }} />
            <Tab.Screen name='Cart' component={CartScreen} options={{
                tabBarIcon: ({ focused }) => (
                    TabItem('FAV', icons.heart, focused)
                ),
            }} />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    TabItem('PROFILE', icons.profile, focused)
                ),
            }} />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        bottom: 50,
        left: 10,
        right: 10,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 60,
    },

});


export default Tabs;