import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Component } from 'react';
import Tabs from './tabs';

const Stack = createNativeStackNavigator();




class MainTabScreen extends Component{

    render(){
        return(
            <NavigationContainer>
                <Tabs/>
            </NavigationContainer>
        );
    }

}

export default MainTabScreen;