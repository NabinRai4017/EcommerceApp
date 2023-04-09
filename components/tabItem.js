import React from "react";
import { Image, Text, StyleSheet } from "react-native";
import { HStack, Box } from "@react-native-material/core";
import {COLORS} from '../constants'

const TabItem = (title, source, focused) => {
    return (
          <Box
                top={14}
                h={30}
                style={{
                    backgroundColor: focused ? COLORS.tertiary : null,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 15,
                }}>
                <HStack
                    spacing={4}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: 10,
                        paddingRight: 10,
                    }} >
                    <Image
                        source={source}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: focused ? COLORS.primary : '#748c94'
                        }}
                    />

                    {focused ? <Text style={{
                        fontSize: 10
                    }}>{title}</Text> : null}

                </HStack>



            </Box>

    );
}





export default TabItem;