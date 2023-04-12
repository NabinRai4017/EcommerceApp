import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../constants";

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 10,
        right: 10,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 60,
        alignItems: 'center',
        flex: 1
    },
});

export default styles;