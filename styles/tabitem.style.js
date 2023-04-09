import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    box: focused => ({
        backgroundColor: focused ? COLORS.tertiary : null,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }),
    hstack: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        fontSize: SIZES.xSmall
    },
    image: focused => ({
        width: 20,
        height: 20,
        tintColor: focused ? COLORS.primary : '#748c94'
    }),
});

export default styles;