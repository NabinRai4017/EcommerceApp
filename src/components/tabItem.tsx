import { useEffect, useMemo, useRef } from "react";
import { Animated, Image, ImageSourcePropType, Text, View } from "react-native";
import styles from "../styles/tabitem.style";
import { ZStack, HStack, Box, NativeBaseProvider, Center } from "native-base";
import { COLORS } from "../constants";


interface TabItemProp{
    title: string, 
    source: ImageSourcePropType,
    focused: boolean
}

const TabItem = ({title, source, focused}: TabItemProp) => {


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
                         style={[
                            styles.image,
                            {
                                tintColor: focused ? COLORS.primary : '#748c94'
                            }
                         ]}
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