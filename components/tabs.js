import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen, CartScreen, SearchScreen} from './screens';
import TabItem from './tabItem'
import {SHADOWS, icons} from '../constants'
import styles from '../styles/tabs.style';

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


export default Tabs;