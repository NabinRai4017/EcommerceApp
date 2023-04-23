import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        height: 30,
        backgroundColor: COLORS.tertiary,
    },
    hstack: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        fontSize: SIZES.xSmall
    },
    dot: {
        position: "absolute",
        bottom: 4,
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: COLORS.primary,
      },
    centered: {
        
    },
    image: {
        width: 20,
        height: 20,
    }
});

export default styles;