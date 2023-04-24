import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './tabs';
import ScreenHeaderBtn from './ScreenHeaderBtn'
import { icons, COLORS } from '../constants'
import { NativeBaseProvider } from 'native-base';



const Stack = createNativeStackNavigator();


const MainTabScreen = () => {


    const cartTap = () => {

    }


    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='main-view'
                        component={Tabs}
                        options={{
                            headerStyle: { backgroundColor: COLORS.tertiary },
                            headerShadowVisible: false,
                            headerRight: () => (
                                <ScreenHeaderBtn iconUrl={icons.cart} dimension='100%' handlePress={cartTap} />
                            ),
                            headerTitle: "EcommerceApp",
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );




}

export default MainTabScreen;