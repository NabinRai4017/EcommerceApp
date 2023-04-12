import { useEffect, useMemo, useRef } from "react";
import { Animated, Image, Text, View } from "react-native";
import styles from "../styles/tabitem.style";
import { useSpring } from "../animations/useSpring";
import { ZStack, HStack, Box, NativeBaseProvider, Center } from "native-base";

const TabItem = (title, source, focused) => {
    // const to = focused ? 1 : 0
    // const animation = useMemo(() => new Animated.Value(to), []);
    // useEffect(() => {
    //     Animated.spring(animation, {
    //         toValue: to,
    //         stiffness: 50,
    //         useNativeDriver: true,
    //     }).start();
    // }, [to]);
    // const labelTranslate = animation.interpolate({ inputRange: [0, 1], outputRange: [20, 0] });
    // const labelVisibility = animation;

    return (
        <NativeBaseProvider>

            <Box style={{
                top: 5,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <HStack
                    h={50}
                    space={1}
                    style={[styles.hstack]} >
                    
                  
                         <Image
                         source={source}
                         resizeMode='contain'
                         style={styles.image(focused)}
                     />
                    

                    {focused ? <View
                        style={[
                            styles.centered,

                        ]}
                    >
                        <Text style={styles.title}>{title}</Text>
                    </View>
                        : null}
                </HStack>

                {/* { focused && <View style={styles.dot}></View>
                } */}

            </Box>
        </NativeBaseProvider>
    );
}

export default TabItem;