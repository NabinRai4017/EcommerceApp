import { useEffect, useMemo, useRef } from "react";
import { Animated, Image, Text, View } from "react-native";
import { HStack, ZStack } from "@react-native-material/core";
import styles from "../styles/tabitem.style";
import { useSpring } from "../animations/useSpring";


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

        
        <Animated.View
            top={14}
            h={30}
            style={[styles.box, {
              
            }]}>

              
            <HStack
                spacing={4}
                style={styles.hstack} >
                <Image
                    source={source}
                    resizeMode='contain'
                    style={styles.image(focused)}
                />

                {focused ? <Animated.View
                    style={[
                        styles.centered,
                        
                    ]}
                >
                    <Text style={styles.title}>{title}</Text>
                </Animated.View>
                    : null}
            </HStack>
        </Animated.View>
    );
}

export default TabItem;