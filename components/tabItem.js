import React from "react";
import { Image, Text, StyleSheet } from "react-native";
import { HStack, Box, Divider } from "@react-native-material/core";
import { motion } from "framer-motion"

const TabItem = (title, source, focused) => {
    return (
        <Box
            // top={14}
            // h={30}
            style={styles.boxStyle}>
            <HStack
                spacing={4}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: 6,
                    paddingRight: 6,
                }} >
                <Image
                    source={source}
                    resizeMode='contain'
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: focused ? '#e32f45' : '#748c94'
                    }}
                />

                {focused ? <Text style={{
                    fontSize: 10
                }}>{title}</Text> : null}

            </HStack>
        </Box>
    );
}



const styles = StyleSheet.create({
    boxStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        top: 14,
        height: 30
    },
});


export default TabItem;