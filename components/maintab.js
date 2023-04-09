import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Component } from 'react';
import Tabs from './tabs';
import ScreenHeaderBtn from './ScreenHeaderBtn'
import {icons, COLORS} from '../constants'

const Stack = createNativeStackNavigator();


class MainTabScreen extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='main-view'
                        component={Tabs}
                        options={{
                            headerStyle: { backgroundColor:  COLORS.tertiary},
                            headerShadowVisible: false,
                            headerRight: () => (
                                <ScreenHeaderBtn iconUrl={icons.cart} dimension='100%' />
                            ),
                            headerTitle: "EcommerceApp",
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default MainTabScreen;