import { StyleSheet , View, Image, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './search';
import CartScreen from './cart';
import ProfileScreen from './profile';
import HomeScreen from './home';
import TabItem from './tabItem'

const Tab = createBottomTabNavigator();


const Tabs = () =>{
    return (
        <Tab.Navigator
            screenOptions = {{
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    TabItem('HOME', require('../assets/icons/home.png'), focused)
                ),
            }}/>
            <Tab.Screen name='Search' component={SearchScreen} options={{
                 tabBarIcon: ({focused}) => (
                    TabItem('SEARCH', require('../assets/icons/search.png'), focused)
                ),
            }}/>
            <Tab.Screen name='Cart' component={CartScreen} options={{
                 tabBarIcon: ({focused}) => (
                    TabItem('CART', require('../assets/icons/cart.png'), focused)
                ),
            }}/>
            <Tab.Screen name='Profile' component={ProfileScreen} options={{
                 tabBarIcon: ({focused}) => (
                    TabItem('PROFILE', require('../assets/icons/profile.png'), focused)
                ),
            }}/>
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    tabBarStyle:{
        position: 'absolute',
        bottom: 50,
        left:10,
        right: 10,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height:60,
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width:0,
            height:10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },

});


export default Tabs;