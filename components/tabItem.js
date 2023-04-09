import React from "react";
import { Image, Text } from "react-native";
import { HStack, Box } from "@react-native-material/core";
import styles from "../styles/tabitem.style";

const TabItem = (title, source, focused) => {
    return (
        <Box
            top={14}
            h={30}
            style={styles.box(focused)}>
            <HStack
                spacing={4}
                style={styles.hstack} >
                <Image
                    source={source}
                    resizeMode='contain'
                    style={styles.image(focused)}
                />
                {focused ? <Text style={styles.title}>{title}</Text> : null}
            </HStack>
        </Box>
    );
}

export default TabItem;