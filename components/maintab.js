import { NavigationContainer } from '@react-navigation/native';
import { Component } from 'react';
import Tabs from './tabs';

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